const { date, string } = require('@hapi/joi');
const mongoose = require('mongoose');


const eventDetailSchema = new mongoose.Schema({
    club:{
        type:String
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    iconName:{
        type:String
    },
    timeCreated:{
        type:Date
    }
}); 

module.exports = mongoose.model('Events', eventDetailsSchema);