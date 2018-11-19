// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../static/css/base.css'
import './styles/main.less';  //引入css
import Vue from 'vue'
import App from './App'  //引入app组件
import router from './router/index.js'  //引入路由
import Axios from 'axios'  //引入axios
import Vuex from 'vuex'  //引入vuex
import store from './store/index.js'  //引入store
import Mint from 'mint-ui'  //引入mint-ui
import '../node_modules/swiper/dist/js/swiper.js' //引入swiper
import $ from 'jquery'; //引入jq

Vue.use(Mint)
Vue.use(Vuex)





Vue.config.productionTip = false

//挂载axios
Axios.interceptors.response.use(function(response){
	return response.data;
},function(error){
	return Promise.reject(error)
})
Vue.prototype.$axios=Axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App }, /*/挂载app组件*/
  template: '<App/>'
})
