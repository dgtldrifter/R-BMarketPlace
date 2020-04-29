const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    categoryid: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    saletype: {
        type: String,
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
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    description: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: false
    },
    date: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    latitude: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    longitude: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    address: {
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
    timestamps: true,
    collection: "posts"
});
const Post = mongoose.model('Post', postSchema);
module.exports = Post;
