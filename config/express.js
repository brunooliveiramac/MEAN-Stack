var express = require('express');  // <-- file name
var app = express();

//express configuration
//middleware
//make public the express instance

//app.use(express.static('./public')); //share public folder, all project resource etc..
//require('../app/routes/foto')(app);

module.exports = app; // <-- Export instance