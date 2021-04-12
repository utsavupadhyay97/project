const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Rider = require('../model/Rider')
const {riderregisterValidation} = require('./validations');


router.post('/riderregister', async (req,res) => {
    
    // validate the data before we use the data
    const {error} = riderregisterValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    
    //check if rideremail already exist
    const emailExist = await Rider.findOne({email:req.body.email});
    if (emailExist) return res.status(400).send('Email already exist');


    //hash password
    const salt =await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);   
    
    //create new rider
    const rider = new Rider({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        mobileno :req.body.mobileno,
        liNo :req.body.liNo,
        vehicleNumber :req.body.vehicleNumber,
        vehicleColor :req.body.vehicleColor,
        vehicleType :req.body.vehicleType,
        vehicleBrand :req.body.vehicleBrand,
        licenseImage1 :req.body.licenseImage1,
        licenseImage2 :req.body.licenseImage2,
        liExpiryDate : req.body.liExpiryDate,
        blueBookExpiryDate :req.body.blueBookExpiryDate,
        citizenshipNumber :req.body.citizenshipNumber,
        citizenshipImage1 :req.body.citizenshipImage1,
        citizenshipImage2 :req.body.citizenshipImage2,
        riderLatitude :req.body.riderLatitude,
        riderLongitude :req.body.riderLongitude
        
        




    });
    try{
        const savedRider = await rider.save();
        res.send(savedRider);

    }catch(err){
        res.status(400).send(err)
    }
});

//view users
router.get('/view', async(req,res) =>{
    try{
        const posts = await Rider.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});


//delete post
router.delete('/:postId', async( req , res ) => {
    try{
        const removedPost = await Rider.remove({_id:req.params.postId});
        res.json(removedPost);
    }catch(error){
        res.json({message:error});
    }
});






module.exports = router;