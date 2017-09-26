import * as http from 'http'
import * as debug from 'debug'
import app from './App'


debug('ts-express:server')
const port = parseInt(process.env.PORT, 10) || 5000;



app.set('port', port);

const server = http.createServer(app)
app.listen(port, () => {
    console.log("Node app is running at localhost:" + port);

});

server.on('error', onError);
server.on('listening', onListening);

function normalizePort(portNum: number | string): number | string | boolean {
    let port = (typeof (portNum) === 'string') ? parseInt(portNum) : portNum;
    if (isNaN(port)) return port;
    else if (port > 0) return port;
    else return false;

}

function onError(error: NodeJS.ErrnoException): void {
    if (error.syscall !== 'listen') throw error;
    let bind = (typeof (port) === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(): void {
    let addr = server.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}