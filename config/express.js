var express = require('express');  // <-- file name
var app = express();
var consign = require('consign');

//express configuration
//middleware - filters 
//make public the express instance

app.use(express.static('./public')); //share public folder, all project resource etc..

//load all folders with their files .css and apis etc...  			
consign({ cwd: 'app'})
		 .include('api') 
		 .then('routes')  
		  //express instace
		 .into(app);

//require('../app/routes/foto')(app);
//require('../app/routes/grupo')(app);

module.exports = app; // <-- Export instance