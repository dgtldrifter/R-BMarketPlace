const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;
const postSchema = new Schema({
    categoryid: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    name: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    price: {
        type:String,
        required: true,
        unique: false,
        trim: true
    },
    description:{
        type:String,
        required:true,
        unique:false,
        trim:true
    },
    ownerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true,
        unique: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    image: {
        type: String,
        required: true,
        unique: false,
        trim: true
    }
}, {
    timestamps:true,
    collection: "posts"
});
const Post = mongoose.model('Post', postSchema);
module.exports = Post;
