//npm init: configuração do express
//npm install express@4.13.3 --save   --> Save express dependenc with our package json


var http = require('http');
var app = require('./config/express'); //load express instance, will take care of requests

http.createServer(app).listen(3000, function(){
	console.log("Server Created");
});