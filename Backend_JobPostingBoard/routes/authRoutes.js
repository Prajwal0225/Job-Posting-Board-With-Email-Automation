const express = require('express');
const { signin, login, sendOTP, mobileauth } = require('../controler/authControler');
const authDuplicateCompany = require('../middleware/authDuplicateCompany');
const router = express.Router();

router.post('/signin', authDuplicateCompany, signin);
router.post('/login', login);
router.post('/sendOTP', sendOTP);
router.post('/mobileauth', mobileauth);

module.exports = router;

