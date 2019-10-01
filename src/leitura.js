const readline = require('readline');
const fs = require('fs'); // file stream
const readable = fs.createReadStream('..\\src\\vex.txt'); // cria stream para a leitura do arq
const entrega = require('../src/models/app-model')
const ctrl = require('../controllers/app-controller')
// Aqui deve ser implementado o whatch() para o FTP

const rl = readline.createInterface({
    input: readable
});

var tipoOcor;

//leitura linha
rl.on('line', (line) => {
    tipoOcor = line.substring(3, 0);
    if (tipoOcor == '342') {
        entrega(line.substring(20, 28),
            line.substring(17, 19),
            line.substring(29, 30), //status depende do código (valor) 
            line.substring(30, 38),
            line.substring(38, 42),
            line.substring(46,117)
            )
        }   
    },
    console.log("leitura registro..."),
    ctrl.createAnEntrega(Entrega)
);

module.exports = rl;