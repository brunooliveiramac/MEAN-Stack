var express = require('express');  // <-- file name
var app = express();
var consign = require('consign');

//express configuration
//middleware - filters 
//make public the express instance

app.use(express.static('./public')); //share public folder, all project resource etc..

//load all folders ... urls    //express instace
consign().include('app/routes').into(app);

//require('../app/routes/foto')(app);
//require('../app/routes/grupo')(app);

module.exports = app; // <-- Export instance