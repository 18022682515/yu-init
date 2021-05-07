const CronJob = require('cron').CronJob;
const { getType } = require('yu-util');

function setTask(timing,callback){
    if(!getType(callback).includes('Function')) return;
    timing = getType(timing)==='String' ? timing : '* * * * * *';
    return new CronJob(timing, callback, null, true);
}

module.exports = (wsServer,socket,SocketServer)=>{
    let num = app.cache;
    setTask('*/10 * * * * *',()=>{
        // SocketServer.emit('_send',`定时发送${num}`);
        // socket.write('我是客户端');
        wsServer.emit('_send',`定时发送${num}`);
    });
}