const router = require('express').Router();
const AboutUs = require('../model/aboutUS');




router.patch('/aboutus/:postid', async (req,res) => {
   
    //create new address
    try{
        const updatepost = await AboutUs.updateMany({_id:req.params.postid},
            { $set: { title:req.body.title }},{ $set :{description:req.body.description }}
            );
            res.json(updatepost); 
        }catch(err){
            res.json({message: err});
        }       
});


module.exports = router;