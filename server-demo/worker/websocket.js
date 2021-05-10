const WebSocketServer = require('websocket').server;

module.exports = server => {
	const wsServer = new WebSocketServer({
		httpServer: server,
		autoAcceptConnections: false
	});
	wsServer.on('request', request => {
		const connection = request.accept('echo-protocol', request.origin);
		connection.on('message', message => {
			console.log('接收到客户端的消息');
		});
		connection.on('close', (reasonCode, description) => {});
		wsServer.on('_send', (...args) => {
			connection.sendUTF(...args);
		});
	})
	return wsServer;
}
