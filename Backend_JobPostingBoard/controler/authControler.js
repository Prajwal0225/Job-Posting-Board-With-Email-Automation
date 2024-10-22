const companyModel = require('../models/company');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecrate = process.env.JWT_SECRET;
const otpGenerator = require("otp-generator");
const { sendMobileSMS, sendOTPMail } = require('../services/otpService');
//twilio
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


async function signin(req, res) {
    try {
        const name = req.body.name;
        const phoneno = req.body.phoneno;
        const companyname = req.body.companyname;
        const companyemail = req.body.companyemail;
        const employeesize = req.body.employeesize;
        const password = req.body.password;
        const c = new companyModel({ name, phoneno, companyname, companyemail, employeesize, password });

        await c.save();
        const token = await jwt.sign({ companyname, companyemail, phoneno }, jwtSecrate);
        res.json({
            message: "Company Added successfully",
            token: token
        })
    } catch (e) {
        res.send(e);
    }
}


async function login(req, res) {
    try {
        const findcompanyname = req.body.companyname;
        const findpassword = req.body.password;

        const company = await companyModel.find({ "companyname": findcompanyname, "password": findpassword });
        const { companyname, companyemail, phoneno } = company;
        if (company) {
            const token = await jwt.sign({ companyname, companyemail, phoneno });
            res.json({
                message: "Log in properly",
                token: token
            })
        } else {
            res.status(404).json({
                message: "User Not Found"
            })
        }
    } catch (error) {
        console.log("error while log in " + error);
    }
}


async function sendOTP(req, res) {
    try {
        const mobileno = req.body.mobileno;
        const email = req.body.email;
        const emailOTP = otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
        console.log(emailOTP);
        await sendMobileSMS(mobileno);
        await sendOTPMail(emailOTP, email);
        res.json({
            message: "OTP send successfully",
            emailOTP: emailOTP
        });
    } catch (e) {
        console.log(e);
    }
}


async function mobileauth(req, res) {
    console.log('From inside mobileauth function ')
    client.verify.v2.services("VA37961e67609f13ce237ec14fc1752a5b")
        .verificationChecks
        .create({ to: "+91" + req.body.mobileno, code: req.body.otpCode })
        .then(verification_check => {
            console.log(verification_check.status)
            res.json({ "status": verification_check.status })
        });
}

module.exports = { signin, login, sendOTP, mobileauth }