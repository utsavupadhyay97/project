const router = require('express').Router();
const RiderHistory = require('../model/rideHistory');
const SavedAddress = require('../model/savedAddress');
const Notification = require('../model/notification');
const Club = require('../model/club');
const Faq = require('../model/faq');
const AboutUs = require('../model/aboutUS');


router.delete('/:postId', async( req , res ) => {
    try{
        const removedPost = await RiderHistory.remove({_id:req.params.postId});
        res.json(removedPost);
    }catch(error){
        res.json({message:error});
    }
});

router.delete('/:postId', async( req , res ) => {
    try{
        const removedPost = await SavedAddress.remove({_id:req.params.postId});
        res.json(removedPost);
    }catch(error){
        res.json({message:error});
    }
});

router.delete('/:postId', async( req , res ) => {
    try{
        const removedPost = await Notification.remove({_id:req.params.postId});
        res.json(removedPost);
    }catch(error){
        res.json({message:error});
    }
});

router.delete('/:postId', async( req , res ) => {
    try{
        const removedPost = await Club.remove({_id:req.params.postId});
        res.json(removedPost);
    }catch(error){
        res.json({message:error});
    }
});

router.delete('/:postId', async( req , res ) => {
    try{
        const removedPost = await Faq.remove({_id:req.params.postId});
        res.json(removedPost);
    }catch(error){
        res.json({message:error});
    }
});

router.delete('/:postId', async( req , res ) => {
    try{
        const removedPost = await AboutUs.remove({_id:req.params.postId});
        res.json(removedPost);
    }catch(error){
        res.json({message:error});
    }
});