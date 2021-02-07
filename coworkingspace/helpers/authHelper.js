const bcrypt = require('bcryptjs');

const user = require('../models/user');
const { Unauthorized, JWTExpired } = require("../helpers/Response/ClientErrors");

const { secret } = require('../config/jwtConfig');
const jwt = require('jsonwebtoken');


module.exports.hashPassword = async function(password) {
    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) reject(err)
            resolve(hash)
        });
    })
    return hashedPassword
}

module.exports.verifyPassword = async function(password, hash) {
    const isVerified = await new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
    return isVerified
}

module.exports.createUserJWT = (data) => {
    return jwt.sign({id: data._id, role: data.role, email: data.email}, secret.JWT);
}

module.exports.verifyReq = (req, res, next) => {
    try {
        const jToken = req.headers['x-auth-token'];
        const decoded = jwt.verify(jToken, secret.JWT);
        req.user = {
            id: decoded.id,
            role: decoded.role,
            email: decoded.email,
            type: decoded.type
        };
        next();
    } catch (err) {
        if (err.name == "TokenExpiredError") return JWTExpired(res);
        return Unauthorized(res, "Please login to continue");
    }
}