//npm init: configuração do express
//npm install express@4.13.3 --save   --> Grava dependencia do express junto com o nosso package json (Compartilhar nossa pasta public, css, html etc)


var http = require('http'); 

http.createServer(function(req, res){

	res.end(req.url); 

}).listen(3000, function(){
	console.log("Ola");
});