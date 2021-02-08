const coWorkingSpace = require('../../models/coWorkingSpace');
const meetingRooms = require('../../models/meetingRoom');

const promiseHandler = require("../../helpers/Response/promiseHandler");
const { BadRequest } = require("../helpers/Response/ClientErrors");
const { Success } = require('../helpers/Response/Success');

module.exports.NewWorkingSpace = async (req, res) => {

    const value = { spaceName, rooms, type, costPerSeat, amenities, availability } = req.body;

    const spaceNameExists = await coWorkingSpace.findBySpaceName(req.body.spaceName);

    if (spaceNameExists) return Conflict(res, "Space Name Exists");

    const { error, data } = await promiseHandler(coWorkingSpace.create(value));

    if(error) return BadRequest(res, "Unable to Fetch Result");

    return Created(data, "Created successfull");

}


module.exports.getAllWorkingSpace = async (req, res) => {

    const { error, data } = await promiseHandler(coWorkingSpace.find({},null,{sort: {'createdAt': -1}}));

    if(error) return BadRequest(res, "Unable to Fetch Result")

    return Success(res, "Results", data);

}