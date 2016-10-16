var mongoose = require('mongoose');


//MongoDB doesn't provide a kind of validation of fields so, mongoose provide it for us.
var schema = mongoose.Schema({

	titulo: {
		type: String, 
		required: true
	},
	url: {
		type: String,
		required: true
	},
	grupo: {
		type: Number,
		required: true
	}

});

mongoose.model('Foto', schema);