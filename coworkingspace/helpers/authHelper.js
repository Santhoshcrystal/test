const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { secret } = require('../config/jwtConfig');


module.exports.createUserJWT = (data) => {
    return jwt.sign({id: data._id, role: data.role, email: data.email}, secret.JWT);
}


module.exports.hashPassword = async function(password) {
    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) reject(err)
            resolve(hash)
        });
    })
    return hashedPassword
}