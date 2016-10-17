var express = require('express');  // <-- file name
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

//express configuration
//middleware - filters 
//make public the express instance
 
app.set('secret', 'meanstack'); // <-- environment variable

app.use(express.static('./public')); //share public folder, all project resource etc..
app.use(bodyParser.json()); // <-- module used in order to popule the body from req

//load all folders with their files .css and apis etc...  			
consign({ cwd: 'app'})
		 .include('models')
		 .then('api') 
		 .then('routes/auth.js')  
		 .then('routes')  
		  //express instace
		 .into(app);

//require('../app/routes/foto')(app);
//require('../app/routes/grupo')(app);

module.exports = app; // <-- Export instance