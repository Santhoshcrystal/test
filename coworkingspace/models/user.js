const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    email: {
        trim: true,
        type: String,
        required: [true, 'Email is must'],
    },
    phoneNumber: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
}, { timestamps: true })


userSchema.statics.findUserByEmail = async function(email) {
    return this.findOne({email});
}

module.exports = mongoose.model('user', userSchema);