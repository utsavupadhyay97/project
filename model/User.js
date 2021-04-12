const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    mobileno: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    },
    profileImage:{
        type: Buffer,
    },
    isActive: {
        type: Boolean,
    },
    lastUpdated:{
        type:Date,
        default:Date.date
    }

});

module.exports = mongoose.model('User', userSchema);

