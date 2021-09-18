const HomeModel = require('../models/HomeModels')

// enviar dados para o banco de dados * nao usar nodemon , porque cria varios


// raramente se usa assim ... so teste
HomeModel.create({
   titulo: ' hello world !!',
   descricao: ' I am a Dev Full Stack NODE !!!',
   nome: 'Dione THE SOFTER ENGINNER!!!'
})
.then(dados => console.log(dados))
.catch(e => console.log(e));

// pegar dados do banco de dados 
HomeModel.find()
.then(dados => console.log(dados))
.catch(e => console.log(e));


exports.paginaInicial = (req,res) => {
       console.log(req.session.usuario ) ,
        res.render('index'
        
            );
    return;
};

exports.trataPost = (req,res) => {
    res.send(req.body);
    return;
};