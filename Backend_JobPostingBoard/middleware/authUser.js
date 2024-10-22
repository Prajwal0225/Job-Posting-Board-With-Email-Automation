const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecrate = process.env.JWT_SECRET;

async function authUser(req, res, next) {
    const token = req.headers.authorization;
    try {
        const verify = await jwt.verify(token, jwtSecrate);
        next();
    } catch (error) {
        res.status(411);
        console.log(error);
        res.json({
            message: "User is not log in",
            error: error
        })
    }

}

module.exports = authUser