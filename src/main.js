import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

//axios
import axios from 'axios'
Vue.prototype.$axios =axios

// -----------------------------------------------------------------------------------------------------

//请求拦截器配置
axios.interceptors.request.use((config) => {
  
  // let token = sessionStorage.getItem('admin')
  // if(token){
  //   config.headers['Authorization'] = token
  // }
  return config;
}, (error) => {
  return Promise.reject(error);
});

//响应拦截器配置
axios.interceptors.response.use((response) => {
  if (response.status == 200) {
    return response.data;
  }
  return response;
}, (error) => {

  return Promise.reject(error);
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
