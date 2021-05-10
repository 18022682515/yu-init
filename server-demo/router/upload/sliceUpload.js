const path = require('path')
const readStream = require('./read.js');
const writeStream = require('./write.js');
const nextEach = require('./nextEach.js');

/**
 * @param {Object} ctx
 * @param {function} next
 * 接收上传文件(断点续传)
 */
module.exports = async function(ctx,next){
	let size = ctx.request.files.file.size;
	if(!app.cache[ctx.request.body['uuid']]){
		app.cache[ctx.request.body['uuid']] = {};
		setTimeout(()=>{
			app.cache[ctx.request.body['uuid']] && (delete app.cache[ctx.request.body['uuid']])
		},1000*60*60*24);
	}
	
	if(Number(ctx.request.body['chunkSize'])!==size){
		ctx.status = 404;
		ctx.body = { state:'error' };
		return;
	}

	let data = app.cache[ctx.request.body['uuid']];
	
	data[ctx.request.body['index']] = ctx.request.files.file.path;
	data['length'] = Number(ctx.request.body['index'])+1;
	
	if(Number(ctx.request.body['sliceSize'])===data.length) {
		data = Array.from(data);
		await nextEach(data,(nextIndex,filePath,i)=>{
			readStream(filePath).then(buffer=>{
				return writeStream(buffer,path.join(__dirname,'../../upload',ctx.request.body['fileName']));
			}).then(nextIndex);
		});
		
		delete app.cache[ctx.request.body['uuid']];
		ctx.status = 200;
		ctx.body = { [ctx.request.body['fileName']]:'上传完成' };
		return;
	}
	
	ctx.status = 200;
	ctx.body = { [ctx.request.body['fileName']]:ctx.request.body['index'] };
}