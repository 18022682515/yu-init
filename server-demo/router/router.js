/**
 * 设置路由
 */
const sliceUpload = require('./upload/sliceUpload.js')


module.exports = router => {
	//参考koa-router

	router.get('/',async (ctx,next)=>{
		await ctx.render('index');
	})
	
	
	router.post('/UploadProgress',(ctx,next)=>{
		ctx.status = 200;
		ctx.body = Object.keys(app[ctx.request.body['uuid']] || {});
	})
	
	
	router.post('/upload',sliceUpload);
	
	
	router.all('/test',async (ctx,next)=>{
		ctx.set('Access-Control-Allow-Origin', '*');		//允许指定网址跨域访问
		ctx.set('Access-Control-Allow-Credentials', true);
		ctx.body = 'test';
	})

}