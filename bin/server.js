const app = require('../src/app.js');
const debug = require ('debug')('nodestr:server');
const http = require ('http');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//Criando o servidor http 
const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('API rodando na porta ' + port);

//Normaliza a porta (caso a 3000 já esteja sendo usada)
function normalizePort(val){
    const port = parseInt(val,10);
    if (isNaN(port)){
        return val;
    }

    if (port >= 0){
        return port;
    }
    return false;
}

//Tratando Erro de Porta
function onError(error){
    if (error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port;

    switch (error.code){
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            proccess.exit(1);
            break;
        case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                proccess.exit(1);
                break;
        default:
            throw error;            
    }
}

//Add debug
function onListening(){
    const addr =server.address();
    const bind = typeof addr === 'string' 
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug ('Listening on ' + bind);
}