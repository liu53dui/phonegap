import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//import axios from 'axios'

//Vue.use(axios);
//注册路由插件（安装）
Vue.use(VueRouter);


//import Vuex from 'vuex'; //引入并注册vuex
//Vue.use(Vuex);
//引入状态管理 store.js
import store from './store'

import routes from './components/router.config.js'//引入路由配置

//引入animate.css
import 'animate.css'

//创建路由实例
const router = new VueRouter(routes);

new Vue({
  el: '#app',
  render: h => h(App),
  //挂载
  router,
  store//挂载
});
  