const companyModel = require('../models/company');

async function authDuplicateCompany(req, res, next) {
    try {
        const phoneno = req.body.phoneno;
        const companyname = req.body.companyname;
        const companyemail = req.body.companyemail;
        const findPhoneno = await companyModel.find({ phoneno })
        const findCompany = await companyModel.find({ companyname })
        const findCompanyemail = await companyModel.find({ companyemail });

        if (findPhoneno.length > 0) {
            res.status(422).send("Phoneno Already Associated with some company");
        } else if (findCompany.length > 0) {
            res.status(422).send("Company Already exit in the database Log in");
        } else if (findCompanyemail.length > 0) {
            res.status(422).send("Company email is already registered");
        } else {
            next();
        }
    } catch (e) {
        res.send(e);
    }
}

module.exports = authDuplicateCompany