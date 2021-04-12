const router = require('express').Router();
const RiderHistory = require('../model/rideHistory');
const {r_id} = require('../model/rideHistory');
const SavedAddress = require('../model/savedAddress');
const Notification = require('../model/notification');
const Club = require('../model/club');
const Faq = require('../model/faq');
const AboutUs = require('../model/aboutUS');
const id = require('../model/Rider');
const Rider = require('../model/Rider');



router.get('/viewhistory', viewhistories);
function viewhistories(res,req,next){
    const posts = await RiderHistory.find({r_id:req.params.r_id});
    if (!id==r_id) return res.send(posts);
    const post = await Rider.findOne();
    res.send(post);
    const postss = await RiderHistory.find();
    res.json(postss);
}
    
    // try{
    // }catch(err){
        // res.json({message:err});
    // }

router.get('/viewaddress', async(req,res) =>{
    try{
        const posts = await SavedAddres.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});


router.get('/viewnotification', async(req,res) =>{
    try{
        const posts = await Notification.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

router.get('/viewclub', async(req,res) =>{
    try{
        const posts = await Club.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

router.get('/viewfaq', async(req,res) =>{
    try{
        const posts = await Faq.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

router.get('/viewabout', async(req,res) =>{
    try{
        const posts = await AboutUs.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router;