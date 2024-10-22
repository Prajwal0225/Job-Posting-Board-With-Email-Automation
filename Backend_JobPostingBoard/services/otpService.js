require('dotenv').config();
//twilio
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
//NodeMailer
const nodemailer = require("nodemailer");


function sendMobileSMS(mobileNo) {
    client.verify.v2.services("VA37961e67609f13ce237ec14fc1752a5b")
        .verifications
        .create({ to: '+91' + mobileNo, channel: 'sms' })
        .then(verification => console.log(verification.sid));
}



const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'glen.schroeder33@ethereal.email',
        pass: 'drz8e2bzGR9AWrGvnw'
    }
});



async function sendOTPMail(otp, email) {
    const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <glen.schroeder33@ethereal.email>', // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "This is your one Time OTP: " + otp, // plain text body
        html: `<b>This is your one Time OTP: </b> ${otp}`, // html body
    });

    return info;
}


module.exports = { sendMobileSMS, sendOTPMail }