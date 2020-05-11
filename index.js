#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const program = require('commander');
const { copyDir } = require('yu-node');

program.version('1.3.8');
program
	.arguments('<dir>')
	.option('-k --koa','创建koa多进程项目')
	.option('-s --server','创建koa单进程项目')
	.option('-m --mobile','创建webpack-mobile项目')
	.option('-p --pc','创建webpack-pc项目')
	.action(callback);
    
program.parse(process.argv);

function callback(dir,cmd){
	if(cmd.koa){
		createDemo(dir,'koa-demo');
	}else if(cmd.server){
		createDemo(dir,'server-demo');
	}else if(cmd.mobile){
		createDemo(dir,'webpack-mobile');
	}else{
		createDemo(dir,'webpack-pc');
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
	!/webpack/.test(demoType) && console.log(`     安装npm包：cnpm install nodemon -g\n`);
	console.log(`     启动项目：cnpm run dev\n`);
}
