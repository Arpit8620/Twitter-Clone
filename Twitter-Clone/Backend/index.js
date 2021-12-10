const express = require('express');
const app=express();
const mongoose = require('mongoose');
const twit = require('./routes/start/twit');
const passport = require('passport');
const User = require('./models/users');
const chec = require('./routes/start/authen');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const multer = require('multer');

mongoose.connect('mongodb://localhost:27017/twittersecond', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(()=>{
    console.log('SuccessFully Connected');
})
.catch((err)=>{
    console.log(err);
    console.log("Connection Discarded");
})

app.use(session({
    secret: 'thisisnotagoodsecret',
    resave: false,
    saveUninitialized: true
}))

//app.use(express.bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

// passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//plant();

app.use(chec)

app.use(twit);

app.listen(8000,()=>{
    console.log('Listening at port 8000');
})