const { date, string } = require('@hapi/joi');
const mongoose = require('mongoose');


const riderSchema = new mongoose.Schema({
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
        type: Number,
        required: true,
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
    vehicleNumber:{
        type: Number,
        required: true,
        min: 6
    },
	vehicleColor:{
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
	vehicleType:{
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
	vehicleBrand:{
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
	liNo:{
        type:String,
        required: true,
        max: 2024,
        min: 6  
    },
    liExpiryDate:{
        type: Date
        
    },
	licenseImage1:{
        type:Buffer
    },
	licenseImage2:{
        type:Buffer
    },
    blueBookExpiryDate:{
       type:Number,
        required: true,
        min: 6 
    },
	citizenshipNumber:{
        type:Number,
        required: true,
        min: 6 
    },
	citizenshipImage1:{
        type:Buffer
    },
	citizenshipImage2:{
        type:Buffer
    },
    riderLatitude: {
        type:Number
    },
    riderLongitude:{
        type:Number
    },  
    rideCompleted:{
        type : Boolean
    },
	rideCancelled:{
        type: Boolean
    },
	timeCreated:{
        type:Date
        
    },
	lastUpdated:{
        type:String
    }
    


});

module.exports = mongoose.model('Rider', riderSchema);

