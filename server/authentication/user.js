const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String, trim: true, required: true
	},
	lastName: {
		type: String, trim: true, required: true
	},
    address: {
		type: String, trim: true
	},
	email: {
		type: String, unique: true, trim: true, lowercase: true, required: true
	},
    password: {
		type: String, trim: true, minlength: 6, required: true
	}
}, {
	timestamps: true
})

const User = mongoose.model('User', userSchema)
module.exports = User;