const mongoose = require('mongoose');


const notificationSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    iconName: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    timeCreated:{
        type:Date

    },
    lastUpdated:{
        type:Date
    }
});    

module.exports = mongoose.model('Notification', notificationSchema);