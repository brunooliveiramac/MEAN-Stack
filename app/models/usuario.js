 var mongoose = require('mongoose');


//MongoDB doesn't provide a kind of validation of fields so, mongoose provide it for us.
var schema = mongoose.Schema({

	login: {
		type: String, 
		required: true
	},
	senha: {
		type: String,
		required: true
	}

});

mongoose.model('Usuario', schema);