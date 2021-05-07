const websocket = require('./websocket.js');
const runClientSocket = require('./clientSocket.js');
const runServerSocket = require('./serverSocket.js');
const socketTask = require('./socketTask.js');


module.exports = server =>{
    // app.socket = runClientSocket(8888,'localhost');
    // app.socketServer = runServerSocket(8000);
    app.wsServer = websocket(server);
    socketTask(app.wsServer);
}