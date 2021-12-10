const mongoose = require('mongoose');
const passportlocalmongoose = require('passport-local-mongoose');
const Mytweet = require('./tweets')

const uer = {
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneno:{
        type:String
    },
    dob:{
        type:Date
    },
    gender:{
        type:String
    },
    quote:{
        type:String
    },
    profilephoto:{
        type:String
    },
    backphoto:{
        type:String
    },
    tweets:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Mytweet'
        }
    ]
}

const uerSchema = new mongoose.Schema(uer);

uerSchema.plugin(passportlocalmongoose);
module.exports= mongoose.model('Mainuser',uerSchema);