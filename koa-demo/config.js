
module.exports = {
    redis:false, //是否开启redis储存session

    keys:['1234567wertyasdfg'], //cookies的密匙

    middlewares:['middleA'], //['middleA','middleB',……], 中间件的文件名加入数组，从0索引开始按顺序执行

    static:'static',  //静态文件的目录

    view:'static',   //html文件的目录

    port:80,   //服务器端口

    mysql:{
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'deng'
    }
}