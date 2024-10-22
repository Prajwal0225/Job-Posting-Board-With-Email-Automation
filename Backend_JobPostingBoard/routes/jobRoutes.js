const express = require('express');
const { posting } = require('../controler/jobControler');
const authUser = require('../middleware/authUser');
const router = express.Router();


router.post('/posting', authUser, posting);

module.exports = router;