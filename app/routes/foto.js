//* FILE ROTES

//var api = require('../api/foto'); <-- already loaded by consig on express.js - see line 7

module.exports = function(app) { 
        
        var api = app.api.foto;// <-- loaded by consign

        app.get('/v1/fotos', api.lista);

        app.route('/v1/fotos/:id') //depending on the verb that was passed, he knows what api to use
            .get(api.buscaPorId)
            .delete(api.removePorId);

};