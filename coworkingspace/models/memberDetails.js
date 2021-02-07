const mongoose = require('mongoose');

const userVisited = new mongoose.Schema({
    _userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    _workspaceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'workingSpace'
    },
    _meetingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'meetingRoom'
    },
}, { timestamps: true })


module.exports = mongoose.model('userVisited', userVisited);