const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "This is required"]
    },
    email: {
        type: String,
        required: [true, "This is required"]
    },
    password: {
        type: String,
        required: [true, "This is required"]
    },
    address: {
        type: String,
        required: [true, "This is required"]
    }
});