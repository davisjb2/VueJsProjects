import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejs-http-4b8b2.firebaseio.com';
const reqInter = axios.interceptors.request.use(config => {
  console.log('request', config);
  return config;
});

const respIntre = axios.interceptors.response.use(res => {
  console.log('response', res);
  return res;
});

axios.interceptors.request.eject(reqInter);
axios.interceptors.response.eject(respIntre);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
