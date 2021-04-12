const { date, string } = require('@hapi/joi');
const mongoose = require('mongoose');


const aboutUsSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    timeCreated:{
        type:Date
    }
}); 

module.exports = mongoose.model('AboutUS', aboutUsSchema);