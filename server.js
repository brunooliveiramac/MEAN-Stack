//npm init: configuração do express
//npm install express@4.13.3 --save   --> Save express dependenc with our package json


var http = require('http');
var app = require('./config/express'); //load express instance, will take care of requests
require('./config/database')('localhost/alurapic'); 


http.createServer(app).listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

