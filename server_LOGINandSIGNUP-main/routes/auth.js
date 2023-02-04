const express = require('express');
const User = require('../model/usermodel');
const authRouter = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth_middleware');
const Prediction = require('../model/Predictionsmdodel');
const e = require('express');

authRouter.post("/signup", async (req , res )=>{
    try{
        const {Fname , Lname , mobileno ,  email , password , dob } = req.body;
        const existinguser = await User.findOne({email});
        console.log(existinguser )
        if(existinguser){
            return res.status(400).json({msg:"User with same email exists"}); 
        } 
        
        const hashedpassword = await bcryptjs.hash(password , 8);
        let user = new User({
            email,
            password : hashedpassword , 
            Fname,
            Lname,
            mobileno,
            dob, 
        })
        user = await user.save();
        res.json({user});
    }
    catch(e)
    {
         res.status(500).json({error : e.message});
    }
});

authRouter.post("/signin", async (req , res )=>{
try{
    
    const {email , password} = req.body;
    const existinguser = await User.findOne({email});
    if(!existinguser){
        return res.status(400).json({msg:'User with the email does not exist'});
    }
    const isMatch = await bcryptjs.compare(password , existinguser.password);
    if(!isMatch){
        return res.status(400).json({msg:'Incorrect Password'});
    }
     const token = jwt.sign({id : existinguser._id},"passwordkey");
     return res.json({token,...existinguser._doc});
}   
catch(e){
    res.status(500).json({error:e.message});
}
});

authRouter.post("/validatetoken" , async (req,res)=>{
    try{
        const token = req.header("x-auth-token");
        if(!token)
        {
            return res.json(false);
        }
        const verified_token = jwt.verify(token , "passwordkey");
        if(!verified_token){
            return res.json(false); }
        
        const user = await User.findById(verified_token.id);
        if(!user){
            return res.json(false);}
        res.json(true);

        }
    catch(e){
        res.status(500).json({error:e.message});
    } 
})

authRouter.get("/", auth ,async (req , res)=>{
    const user = await User.findById(req.user);
    res.json({...user._doc , token : req.token}); 
})

authRouter.post("/add-pred", async(req,res)=>{
    try{
        const { location ,  price , bhk ,bath ,sqft, email} = req.body;
        console.log(req.body)
        let prediction = new Prediction({
            location,
            price,
            bhk,
            sqft,
            bath,
            email,
        })
        console.log(prediction)
        prediction = await prediction.save();
        res.json(prediction);
    }
    catch(err){
        res.status(500).json({error:e.message})
    }
})

authRouter.get("/getProduct", async(req,res)=>{
    try{
       const email = req.body;
        const resl = await Prediction.find(email);
        res.json(resl);
    }
    catch(e){
        res.status(500).json({error:e.message})
    }
})

module.exports = authRouter;
