import Vue from 'vue';
import yu from 'yu-vue';
import router from '@/router/router.js';
import front from 'yu-front';
import util from 'yu-util';
import 'yu-css';
import app from '@/index.vue';

Vue.use(yu);

new Vue({
    el:"#app",
    router,
    render:h=>h(app)
});
