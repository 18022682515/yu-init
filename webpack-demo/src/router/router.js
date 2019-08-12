import Vue from 'vue';
import Router from 'vue-router';
const hello = res=>require(['@/components/hello.vue'],res);

Vue.use(Router);

export default new Router({
    mode:"hash",
    base:"/",
    routes:[
        {
            path:"/hello",
            name:"hello",
            component:hello,
            // children:[
            //     {
            //         path:"",
            //         component:null
            //     },
            // ]
        },
    ]
});