const { mongoose } = require('mongoose');

const companySchema = new mongoose.Schema({
    name: String,
    phoneno: String,
    companyname: String,
    companyemail: String,
    employeesize: Number,
    password: String
})

const companyModel = mongoose.model('Company', companySchema);

module.exports = companyModel;