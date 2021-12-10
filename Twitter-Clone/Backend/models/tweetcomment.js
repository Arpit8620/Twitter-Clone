const mongoose = require('mongoose');

const cSchema = new mongoose.Schema({
    usercomment:{
        type:String
    },
    cbody:{
        type:String
    }
});

const Comment = mongoose.model('Comment',cSchema);
module.exports= Comment;