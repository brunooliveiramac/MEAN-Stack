//* FILE ROUTES

//var api = require('../api/grupo');

module.exports = function(app) {
 		
 		var api = app.api.grupo;// <-- loaded by consign

        app.get('/v1/grupos', api.lista);
};