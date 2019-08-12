const run = require('yu-webpack');

run('./entry','dev',null,'http://127.0.0.1:80');  //开发模式
//说明:'http://127.0.0.1:80'是开发模式下可跨域访问的服务器地址，访问'/api'等同于访问'http://127.0.0.1:80/'

// run('./entry','pro');  //生产模式