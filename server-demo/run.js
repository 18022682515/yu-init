const run = require('yu-server');
const webSocket = require('./worker/webSocket.js');
const serverSocket = require('./worker/serverSocket.js');
const clientSocket = require('./worker/clientSocket.js');

run().then(()=>{
	console.log('全局app初始化完成');
	
	app.wsServer = webSocket(app.servers.http || app.servers.https);
	app.serverSocket = serverSocket(8888);
	app.clientSocket = clientSocket(8080,'127.0.0.1');
	// app.mysql.query('select * from test').then(data=>{});
	// app.tasks	管理定时任务
	// app.cache		
})