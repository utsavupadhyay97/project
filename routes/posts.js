const router = require('express').Router();
const RiderHistory = require('../model/rideHistory');
const SavedAddress = require('../model/savedAddress');
const Notification = require('../model/notification');
const Club = require('../model/club');
const Faq = require('../model/faq');
const AboutUs = require('../model/aboutUS');




router.post('/riderhistory', async (req,res) => {
   
    //create new rider
    const riderHistory = new RiderHistory({
        passenger: req.body.passenger,
        rider: req.body.rider,
        status: req.body.status,
        cost :req.body.cost,
        pickupPointLatitude :req.body.pickupPointLatitude,
        pickupPointLongitude :req.body.pickupPointLongitude,
        destinationPointLatitude :req.body.destinationPointLatitude,
        destinationPointLongitude :req.body.destinationPointLongitude,
        pickupInfo :req.body.pickupInfo,
        destinationInfo:req.body.destinationInfo,
        timeCreated : req.body.ltimeCreated,
        timePeriod :req.body.timePeriod,
        timeCompleted :req.body.timeCompleted,
        userCancelNote :req.body.userCancelNote,
        riderCancelNote :req.body.riderCancelNote,
        rideStatus :req.body.rideStatus,
        verificationCode :req.body.verificationCode,
        lastUpdated:req.body.verificationCode,
        codeVerified :req.body.verificationCode





    });
    try{
        const savedRiderHistory = await riderHistory.save();
        res.send(savedRiderHistory);

    }catch(err){
        res.status(400).send(err)
    }
});

router.post('/savedAddress', async (req,res) => {
   
    //create new address
    const savedAddress = new SavedAddress({
        user: req.body.user,
        title: req.body.title,
        description: req.body.description,
        iconName :req.body.iconName,
        timeCreated :req.body.timeCreated
        
    });
    try{
        const saveAddress = await savedAddress.save();
        res.send(saveAddress);

    }catch(err){
        res.status(400).send(err)
    }
});

router.post('/notification', async (req,res) => {
   
    //create new address
    const notification = new Notification({
        description: req.body.description,
        iconName :req.body.iconName,
        timeCreated :req.body.timeCreated,
        lastUpdated : req.body.lastUpdated
        
    });
    try{
        const saveNotification = await notification.save();
        res.send(saveNotification);

    }catch(err){
        res.status(400).send(err)
    }
});
router.post('/club', async (req,res) => {
   
    //create new address
    const club = new Club({
        title : req.body.title,
        description: req.body.description,
        iconName :req.body.iconName,
        timeCreated :req.body.timeCreated,
        lastUpdated : req.body.lastUpdated
        
    });
    try{
        const saveClub = await club.save();
        res.send(saveClub);

    }catch(err){
        res.status(400).send(err)
    }
});

router.post('/faq', async (req,res) => {
   
    //create new address
    const faq = new Faq({
        title : req.body.title,
        description: req.body.description,
        timeCreated :req.body.timeCreated
    });
    try{
        const saveFaq = await faq.save();
        res.send(saveFaq);

    }catch(err){
        res.status(400).send(err)
    }
});

router.post('/aboutus', async (req,res) => {
   
    //create new address
    const aboutUs = new AboutUs({
        title : req.body.title,
        description: req.body.description,
        timeCreated :req.body.timeCreated
    });
    try{
        const saveAboutUS = await aboutUs.save();
        res.send(saveAboutUS);

    }catch(err){
        res.status(400).send(err)
    }
});

module.exports = router;