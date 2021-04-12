const Joi = require('@hapi/joi');


const riderregisterValidation = data =>{
    const schema = {
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        mobileno: Joi.string().min(10).required(),
        liNo: Joi.number().min(10).required(),
        vehicleNumber :Joi.number().min(20).required(),
        vehicleColor :Joi.string().min(2).required(),
        vehicleType :Joi.string().min(5).required(),
        vehicleBrand :Joi.string().min(5).required(),
        liExpiryDate : Joi.number().min(20).required(),
        blueBookExpiryDate :Joi.number().min(20).required(),
        citizenshipNumber :Joi.number().min(20).required(),
        riderLatitude :Joi.number().positive().min(26).max(29).precision(7).required(),
        riderLongitude :Joi.number().required()
    
    };
    return Joi.validate(data,schema);
};

module.exports.riderregisterValidation = riderregisterValidation;