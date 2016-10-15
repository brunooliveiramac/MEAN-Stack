//* FILE ROTES

//var api = require('../api/foto'); <-- already loaded by consig on express.js - see line 7

module.exports = function(app) { 
        
        var api = app.api.foto;// <-- loaded by consign

        app.get('/v1/fotos', api.lista);

};