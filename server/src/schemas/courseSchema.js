const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
	userId: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: () => Date.now(),
		immutable: true,
	},
	updatedAt: {
		type: Date,
		default: () => Date.now(),
	},
});

module.exports = mongoose.model('courses', courseSchema);
