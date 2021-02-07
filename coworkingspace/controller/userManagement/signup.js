const users = require('../../models/user');

const {createUserJWT } = require('../../helpers/authHelper');
const { hashPassword } = require('../../helpers/authHelper');

const promiseHandler = require("../../helpers/Response/promiseHandler");
const { Success } = require('../../helpers/Response/Success');
const { BadRequest, Conflict } = require("../../helpers/Response/ClientErrors");

module.exports.signUp = async (req, res, next) => {

    const value =  { firstName, email, phoneNumber, password } = req.body;
    
    const userExists = await users.findUserByEmail(value.email);

    if (userExists) return Conflict(res, "User with the same email id exist");

    value.password = await hashPassword(value.password);

    const { error, data } = await promiseHandler(users.create(value));

    if(error) return BadRequest(res, "Error In Database Connection")

    const token = createUserJWT(data);

    return Success(res, "SignUp successfull",{id: data._id, name: data.firstName, jT: token, role: data.role });

}