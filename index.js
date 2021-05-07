#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const program = require('commander');
const { copyDir,rmDir } = require('yu-node');
const childProcess = require('child_process');

program
	.arguments('<dir>')
	.option('-k --koa','创建koa多进程项目')
	.option('-s --server','创建koa单进程项目')
	.action(callback);
    
program.parse(process.argv);

function callback(dir,cmd){
	if(cmd.koa){
		createDemo(dir,'koa-demo');
	}else if(cmd.server){
		createDemo(dir,'server-demo');
	}
}

function coverDir(demoType){
	return new Promise(res=>{
		rmDir(path.join(__dirname,demoType));
		childProcess.exec('git clone https://github.com/18022682515/'+demoType+'.git',{ cwd:__dirname },(error, stdout, stderr)=>{
			if(error){
				console.log('下载失败,项目构建失败',error)
				return;
			}
			res();
		})
		console.log('正在从github下载......');
	});
}

function createDemo(dir,demoType){
	coverDir(demoType).then(()=>{
		
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
		
		console.log('\n     项目构建完成\n');
		console.log(`     cd ${dir}\n`);
		console.log(`     安装npm包：cnpm install\n`);
		!/webpack/.test(demoType) && console.log(`     安装npm包：cnpm install nodemon -g\n`);
		console.log(`     启动项目：cnpm run dev\n`);
	})
}
