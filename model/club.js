const { date, string } = require('@hapi/joi');
const mongoose = require('mongoose');


const clubSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Club', clubSchema);