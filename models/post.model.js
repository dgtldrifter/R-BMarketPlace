const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    title: {
        type: String,
        required:true,
        unique: false,
        trim:true
    },
    ownerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description:{
        type:String,
        required:true,
        unique:false,
        trim:true
    }
}, {
    timestamps:true,
    collection: "posts"
});
const Post = mongoose.model('Post', postSchema);
module.exports = Post;

