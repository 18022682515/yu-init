
class Home{    /* 类名和文件名可自定义 */
    
    async index(ctx,next){    //路由地址：localhost/index
			await ctx.render('index');
			// ctx.body = '首页';
    }
		
		async abc(ctx,next){      //路由地址：localhost/abc
			ctx.body = 'abc'
		}
		
		async test(ctx,next){
			ctx.set('Access-Control-Allow-Origin', '*');
			ctx.set('Access-Control-Allow-Credentials', true);
			ctx.body = 'test';
		}
}

module.exports = Home;