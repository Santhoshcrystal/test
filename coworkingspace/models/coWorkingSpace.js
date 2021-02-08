const mongoose = require('mongoose');

const workingSpace = new mongoose.Schema({
    spaceName: {
        type: String,
    },
    rooms: {
        type: Number,
    },
    type: {
        type: String,
    },
    costPerSeat: {
        type: String,
    },
    amenities: {
        type: [String]
    },
    availability: {
        type: Boolean,
        default: true
    },
}, { timestamps: true })



workingSpace.statics.findBySpaceName = async function(spaceName) {
    return this.findOne({spaceName});
}

module.exports = mongoose.model('workingSpace', workingSpace);