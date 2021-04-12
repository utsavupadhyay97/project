const mongoose = require('mongoose');

const savedAddressSchema = new mongoose.Schema({
    user:{
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
module.exports = mongoose.model('Address', savedAddressSchema);  