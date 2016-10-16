//* BUSSINESS LOGIC
var mongoose = require('mongoose');
var api = {};

api.lista = function(req, res){

        var model = mongoose.model('Foto');
        model  
            .find({})
            .then(function(fotos){

                res.json(fotos);
            
            }, function(error){
               
                res.status(500).json(error);
                console.log('Error to find Fotos'); 
            
            });



};

api.buscaPorId = function(req, res){
                        //Node4 function (find)

            
};

api.removePorId = function(req, res){


};

api.adiciona = function(req, res){

};

api.atualiza = function(req, res){


}; 

//exporting api
module.exports = api;
