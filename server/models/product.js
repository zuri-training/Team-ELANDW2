const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "This is required"]
    },
    description: {
        type: String,
        required: [true, "This is required"]
    },
    price: [
        {
            platform: {
                type: String,
                required: [true, "This is required"]
            },
            price: {
                type: Number,
                required: [true, "This is required"]
            }
        }
    ],
    comment: [
        {
            author : {
                type: String,
                required: [true, "This is required"]
            },
            text:{
                type: String,
                required: [true, "This is required"]
            }, 
            timestamp: {
                type: Date,
                default : Date.now,
                // required: [true, "This is required"]
            } 
        }
    ],
    
});

const Product = mongoose.model('Product', productSchema)
module.exports = Product;