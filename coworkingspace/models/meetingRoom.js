const mongoose = require('mongoose');

const meetingRoom = new mongoose.Schema({
    meetingRoom: {
        type: String,
    },
    availability: {
        type: Boolean,
        default: true
    },
}, { timestamps: true })


module.exports = mongoose.model('meetingRoom', meetingRoom);