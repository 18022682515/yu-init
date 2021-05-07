/**
 * 设置路由
 */

module.exports = router => {
	//参考koa-router

	router.get('/',async (ctx,next)=>{
		await ctx.render('index');
	})
	
	router.all('/test',async (ctx,next)=>{
		ctx.set('Access-Control-Allow-Origin', '*');		//允许指定网址跨域访问
		ctx.set('Access-Control-Allow-Credentials', true);
		ctx.body = 'test';
	})

}