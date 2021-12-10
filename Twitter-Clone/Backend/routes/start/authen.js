const express = require('express');
const passport = require('passport');
const route = express.Router();
const Mainuser = require('../../models/users');

route.post('/register',async(req,res)=>{
    console.log(req.body);
    const newuser = await Mainuser.register({
        username:req.body.username,
        email:req.body.email,
        phoneno:req.body.phoneno,
        gender:req.body.gender,
        dob:req.body.dob,
        quote:'',
        profilephoto:'',
        backphoto:''
    },req.body.password);
    const das = await Mainuser.find({});
    console.log(das);
    console.log(newuser);
})

route.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => { 
    console.log("Successful");
    res.send();
})

route.get('/logout',(req,res)=>{
    req.logout();
    res.send();
})

module.exports=route