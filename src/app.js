const express = require('express');
const bodyParser = require('body-parser'); //para requisições no formato JSON

const app = express();
const router = express.Router();

//carrega as rotas
// const index = require('./routes/index-route');
const appRoute = require('./routes/app-route');

//carrega leitor arq
// const leitor = require('../src/leitura').default;
const leitor = require('../src/models/app-model').default;

app.use(bodyParser.json()); //converte as requisições para o formato JSON
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

//usa rotas
// app.use('/routes', index);
app.use('/routes', appRoute);

module.exports = app;