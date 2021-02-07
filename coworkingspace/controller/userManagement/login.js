const users = require('../../models/user');
const { verifyPassword, createUserJWT } = require('../../helpers/authHelper');
const { Success } = require('../../helpers/Response/Success');
const { UnprocessabelEnitity, Unauthorized } = require("../../helpers/Response/ClientErrors");



module.exports.login = async (req, res) => {

    const { email, password } = req.body;

    const userExits = await users.findUserByEmail(email);

    if (!userExits) return UnprocessabelEnitity(res, "Please register to continue")

    const isVerified = await verifyPassword(password, userExits.password);

    if (!isVerified) return Unauthorized(res, "Wrong credentials");

    const token = createUserJWT(userExits);

    return Success(res, "Login successful", { id: userExits._id, name: userExits.firstName, jT: token, role: userExits.role });

}