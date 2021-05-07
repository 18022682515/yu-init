
class User{
		
    async login(ctx,next){    //路由地址：localhost/login
        ctx.body = 'login';
    }
		
		async info(ctx,next){    //路由地址：localhost/info
			ctx.body = 'info'
		}
}

module.exports = User;