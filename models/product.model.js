const mongoose      = require('mongoose');
const Schema        = mongoose.Schema;
const productSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
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
        type: Decimal128,
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
    seller: {
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
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;