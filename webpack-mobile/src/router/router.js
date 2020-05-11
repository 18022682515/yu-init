import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: () => import('@/components/home.vue') },
    { 
			path: '/a', 
			component: () => import('@/components/a.vue'),
			children:[
				{ path: 'ab', component: () => import('@/components/ab.vue') }
			]
		},
  ]
})
