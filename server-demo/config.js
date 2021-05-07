
module.exports = {
    redis:{ //开启redis储存session,不开启则设置为redis:false
        port: 6379,
        host: "127.0.0.1",
        family: 4, // 4 (IPv4) or 6 (IPv6)
        password: "",
        db: 0 
    },

    keys:['1234567wertyasdfg'], //cookies的密匙

    middlewares:[], //['middleA','middleB',……], 中间件的文件名加入数组，从0索引开始按顺序执行
		
    static:'static',  //静态文件的目录

    view:'static',   //html文件的目录

    http:{
        port:80  //http服务器端口
    },

    https:{
        port:8000,  //https服务器端口
        // key:'./server.key',   //https证书的路径
        // cert:'./server.cer'
    },

    mysql:{
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'deng'
    },
		
		routesPrefix:{     //路由添加前缀，原先：localhost/login，添加前缀后：localhost/user/login
			'/user':['user'],     //数组中的'user'是controller目录的user.js，给该文件的所有路由添加'/user'前缀。
		}
}