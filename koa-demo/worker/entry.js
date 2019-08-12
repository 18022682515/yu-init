const websocket = require('./websocket.js');
const runClientSocket = require('./clientSocket.js');
const runServerSocket = require('./serverSocket.js');
const socketTask = require('./socketTask.js');


module.exports = server =>{
    // let socket = runClientSocket(8888,'localhost');
    // let socketServer = runServerSocket(8000);
    let wsServer = websocket(server);
    socketTask(wsServer);
}