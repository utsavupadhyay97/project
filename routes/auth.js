const router = require('express').Router();
const User = require('../model/User');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {registerValidation} = require('../routes/validation');

const {loginValidation} = require('../routes/validation');
// const { route } = require('./images');






router.post('/register', async (req,res)=>{
    
    //validate the data before we use the data
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    
    //cheacking if the user is already in the database 
    const emailExist = await User.findOne({email:req.body.email});
    if (emailExist) return res.status(400).send('Email already exist');

    //hash password
    const salt =await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);   


    //create new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        mobileno :req.body.mobileno,
        profileImage: req.body.profileImage,
        confirmed : req.body.confirmed,
        isActive :true,
        lastUpdated :req.body.date
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);

    }catch(err){
        res.status(400).send(err)
    }
});


//view users
router.get('/view', async(req,res) =>{
    try{
        const posts = await User.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});


//delete post
router.delete('/:postId', async( req , res ) => {
    try{
        const removedPost = await User.remove({_id:req.params.postId});
        res.json(removedPost);
    }catch(error){
        res.json({message:error});
    }
});


router.post('/login', async(req, res) => {
    
    
    //lets validate the data before we a user 
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //cheacking if the user is already in the database 
    const user = await User.findOne({email:req.body.email});
    if (!user) return res.status(400).send('Email or password is wrong');
    
    //cheacking if the password is correct
    const validPass =await bcrypt.compare(req.body.password, user.password);  
    if (!validPass) return res.status(400).send('Invalid password');

    //Create and asign token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);


    res.send('Logged in!');
});


module.exports = router;