import Vue from 'vue'
import Yu from 'yu-vue-mobile'
import App from './app.vue'
import router from './router/router.js'
import './public/index.css'

Vue.use(new Yu())

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
});