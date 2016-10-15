//* BUSSINESS LOGIC

var api = {};

var fotos = [
                {_id: 1, titulo: 'Leão', url:'http://www.fundosanimais.com/Minis/leoes.jpg' },
                {_id: 2, titulo: 'Leão 2', url:'http://www.fundosanimais.com/Minis/leoes.jpg' },
                {_id: 3, titulo: 'Leão 3', url:'http://www.fundosanimais.com/Minis/leoes.jpg' }

            ]; 

api.lista = function(req, res){

        res.json(fotos);

};

api.buscaPorId = function(req, res){
                        //Node4 function (find)
        var foto = fotos.find(function(foto){
            return foto._id == req.params.id;
        }); 
           
        res.json(foto);
            
};

//exporting api
module.exports = api;