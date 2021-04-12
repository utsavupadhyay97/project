const { object } = require('@hapi/joi');
const mongoose = require('mongoose');
const { get } = require('../routes/put');
const { schema } = require('./aboutUS');
const Rider = require('./Rider');

const riderHistorySchema = new mongoose.Schema({
    passenger:{
        type:String
    },
    rider:{
        type:String
    },
    status:{
        type:Boolean
    },
    cost:{
        type:Number
    },
    pickupPointLatitude:{
        type:Number
    },
	pickupPointLongitude:{
        type:Number
    },
	destinationPointLatitude:{
        type:Number
    },
	destinationPointLongitude:{
        type:Number
    },
    pickupInfo:{
        type: String
    },
	destinationInfo:{
        type:String
    },
	timeCreated:{
        type:Date,
    },
	timePeriod:{
        type:Date,
    },
	timeCompleted:{
        type:Date
    },
	codeVerified:{
        type:String
    },
	lastUpdated:{
        type:Date,
    },
    verificationCode:{

    },
    rideStatus:{
        type: Boolean
    },
    riderCancelNote:{
        type: String,
        max:1024,
        min:20
    },
    userCancelNote:{
        type: String,
        max:1024,
        min:20
    }
    
});

module.exports = mongoose.model('RiderHistory', riderHistorySchema);