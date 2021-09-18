const express = require('express');
const route = express.Router();
const homeController = require('./src/controller/homeController')
const contatoController = require('./src/controller/contatoController')



//rotas da home

route.get('/', homeController.paginaInicial);
route.post('/',homeController.trataPost);

//rotas contato
route.get('/contato', contatoController.contatoController);
//route.post('/contato', contatoController.trataContato);

module.exports = route;

