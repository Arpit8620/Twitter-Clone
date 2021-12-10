const mongoose = require('mongoose');
const express = require('express');
const route = express.Router();
const Mytweet = require('../../models/tweets')
const Mainuser = require('../../models/users');
const tweetcomment = require('../../models/tweetcomment');
const multer = require('multer');
const path = require('path');
const fs = require('file-system');
const app = express();
const {isLoggedIn} = require('../../middleware');

route.use(express.static('public/'));

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public');
    },
    filename:(req,file,cb)=>{
        cb(null,  Date.now() + '-' + file.originalname )
    }
})

const upload = multer({storage:storage})

route.get('/twitter',isLoggedIn,async(req,res)=>{
    const pac = await Mainuser.find({}).populate('tweets');
    console.log(req.user);
    res.send(pac);
})

route.get('/twitter/:_id/twt/:tweetid/comment',isLoggedIn,async(req,res)=>{
    const panda = await Mytweet.findById(req.params.tweetid).populate('comments');
    res.send(panda);
})

route.get('/twitter/:_id/display',isLoggedIn,async(req,res)=>{
    const mans = await Mainuser.findById(req.params._id).populate('tweets');
    res.send(mans);
})

route.get('/twitter/:_id/frog',isLoggedIn,async(req,res)=>{
    const frappy = await Mainuser.findOne({_id:req.params._id});
    console.log(frappy);
    res.send(frappy);
})

route.post('/twitter/:tweetid/comment',isLoggedIn,async (req,res)=>{
    const mantis = await Mytweet.findById(req.params.tweetid);
    console.log(req.body);
    const comme = new tweetcomment({usercomment:req.user.username,cbody:req.body.cbody});
    mantis.comments.push(comme);
    await mantis.save();
    await comme.save();
})

route.post('/twitter/:_id/tweets',isLoggedIn,upload.single('image'),async(req,res)=>{
    const main = await Mainuser.findById(req.params._id);
    const obj={
        body:req.body.body,
        image: req.file.filename
    }
    console.log(obj);
    console.log(main);
    let ntweet= new Mytweet(obj);
    console.log(ntweet);
    await main.tweets.push(ntweet);
    ntweet.save();
    main.save();
    console.log('SuccessFully Done......  :-)');
})

route.get('/twitter/getuser',async(req,res)=>{
    const mask = await Mainuser.find({username:req.user.username});
    res.send(mask);
})

route.patch('/twitter/:_id/myprofile',isLoggedIn,upload.fields([{name:'profilephoto',maxCount:1},{name:'backphoto',maxCount:1}]),async(req,res)=>{
    console.log(req.body);
    // console.log(req.files.profilephoto[0]);
    // console.log(req.files.backphoto[0]);
    const main = await Mainuser.findByIdAndUpdate(req.params._id,{quote:req.body.quote,profilephoto:req.files.profilephoto[0].filename,backphoto:req.files.backphoto[0].filename});
    console.log(main);
})
module.exports=route;