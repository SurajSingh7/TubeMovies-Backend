// Import the Mongoose library
const mongoose = require("mongoose");


const movieSchema = new mongoose.Schema(
	{
		// Define the name field with type String, required, and trimmed
		name: {
			type: String,
			required: true,
			trim: true,
		},
		url: {
			type: String,
			required: true,
			trim: true,
		},
		
		image: {
			type: String,
			required: true,
			trim: true,
		},
		category: {
			type: String,
			required: true,
		},
        linkType:{
			type: String,
			required:true,
		},
        tubeUrl: {
			type: String,
		},
		
	},
);

module.exports = mongoose.model("movies", movieSchema);