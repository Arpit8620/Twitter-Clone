const mongoose = require('mongoose');
const Comment = require('./tweetcomment');

const tweetSchema = new mongoose.Schema({
    body:{
        type:String,
        required:true
    },
    image:{
        type:String    
    },
    likes:{
        type:Number,
    },
    comments:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Comment'
        }
    ]
})

module.exports= mongoose.model("Mytweet",tweetSchema);