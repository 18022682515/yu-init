#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const program = require('commander');
const { copyDir } = require('yu-node');

program.version('1.3.4');
program
    .arguments('<dir>')
    .option('-w --webpack','创建webpack项目')
	.option('-s --server','创建koa单进程项目')
    .option('-k --koa','创建koa多进程项目')
    .action(callback);
    
program.parse(process.argv);

function callback(dir,cmd){
    if(cmd.webpack){
        createDemo(dir,'webpack-demo');
    }else if(cmd.server){
        createDemo(dir,'server-demo');
    }else{
        createDemo(dir,'koa-demo');
    }
}

function createDemo(dir,demoType){
    let root = path.resolve('./',dir);
    if(fs.existsSync(root)){
        console.log('目录已存在');
        return;
    }
    const source = path.resolve(__dirname,demoType);
    copyDir(source,root);

    let str = fs.readFileSync( path.resolve(source,'package.json'),'utf8' );
    data = str.replace('test-1',dir);
    setTimeout(()=>{
        fs.writeFileSync(path.resolve(root,'package.json'),data);
    },100);

    console.log('\n     已生成项目文件\n');
    console.log(`\n     cd ${dir}\n`);
    console.log(`     安装npm包：cnpm install\n`);
	demoType!='webpack-demo' && console.log(`     安装npm包：cnpm install nodemon -g\n`);
    console.log(`     启动项目：cnpm run dev\n`);
}
