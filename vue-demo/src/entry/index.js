// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from 'vues/index'
import router from '@/router'
import front from 'yu-front';
import util from 'yu-util';
import yu from 'yu-vue';

Vue.config.productionTip = false;

Vue.use(yu);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { app },
  template: '<app/>'
})
