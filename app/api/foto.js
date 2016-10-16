//* BUSSINESS LOGIC
var mongoose = require('mongoose');
var api = {};
 
       var model = mongoose.model('Foto');


api.lista = function(req, res){

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

        model
            .findById(req.params.id)
            .then(function(foto){
                if(!foto) throw Error('Foto does not exists');

                    res.json(foto); 

            }, function(error){
                console.log(error);
                res.status(404).json(error);
            });
            
};

api.removePorId = function(req, res){

        model
        .remove({_id: req.params.id})
        .then(function(){
        
            res.sendStatus(204); 
        
        }, function(error){
            console.log(erro);
            res.status(500).json(error);
        });
};

api.adiciona = function(req, res){

        var foto = req.body;

        model
        .create(foto) // <-- foto da requisição
        .then(function(foto){ //<-- foto do banco com id

            res.json(foto);

        }, function(error){
            console.log(error);
            res.status(500).json(error);
        });
};

api.atualiza = function(req, res){
                                // find by Id and after that pass the data (req.body) to this Object
        model
        .findByIdAndUpdate(req.params.id, req.body)
        .then(function(foto){

            res.json(foto);
 
        }, function(error){
            console.log(error);
            res.status(500).json(error);
        });
}; 

//exporting api
module.exports = api;
