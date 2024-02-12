const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: String,
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: () => Date.now(),
		immutable: true,
	},
});

module.exports = mongoose.model('users', userSchema);
