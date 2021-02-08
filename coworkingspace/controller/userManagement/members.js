const user = require('../../models/user');
const meetingRooms = require('../../models/meetingRoom');
const coWorkingSpace = require('../../models/coWorkingSpace');

const promiseHandler = require("../../helpers/Response/promiseHandler");
const { BadRequest } = require("../helpers/Response/ClientErrors");
const { Success } = require('../helpers/Response/Success');


module.exports.updateMemeberDetails = async (req, res) => {

    const { error, data } = await promiseHandler(user.update({_id:req.body.id},{$set: value}));

    if(data) return Success(res, data)

    return BadRequest(res, "Error in db connections");
}


module.exports.reserveMeetingRoom = async (req, res) => {

    const { error, data } = await promiseHandler(meetingRooms.updateOne({_id:req.body.userId},{$set: value}));

    if(data) return Success(res, data)

    return BadRequest(res, "Error in db connections");
}


module.exports.bookRoomSpace = async (req, res) => {

    const { error, data } = await promiseHandler(coWorkingSpace.create({_id:req.body.userId},{$set: value}));

    if(data) return Success(res, data)

    return BadRequest(res, "Error in db connections");
}