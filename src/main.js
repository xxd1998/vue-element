import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import Sortable from 'sortablejs'
import clipboard from 'clipboard';//注册到vue原型上
import XLSX from 'xlsx'
Vue.use(XLSX)
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
import zh from './assets/lang/zh'
import en from './assets/lang/en'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import "./assets/font/iconfont.css"
import axios from 'axios'
Vue.prototype.$http = axios
import store from './store/index'
import md5 from 'js-md5'  //引入
Vue.prototype.$md5 = md5;  //定义全局变量
Vue.use(mavonEditor)
import VueVaptcha from 'vue-vaptcha'
const options = {
    VID: "5fd0b1595bb14063462b1169",
    KEY: "3004b1528269476d991d52671c1a373a",
    type: 'click',
    color: '#8c00ff',
    style: 'light',
    lang: 'en'
}
Vue.use(VueVaptcha(options))
const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',
  messages: {
    zh,
    en
  }
})
export default i18n;

// http request 拦截器
// 全局header签名
axios.interceptors.request.use(
    config => {
        if (localStorage.token) {
            config.headers.accesstoken = localStorage.token
        }
        return config;
    },
    error => {
        //请求错误
        return Promise.reject(error);
    }

)

new Vue({
  router,
  i18n,
    store,
  render: h => h(App)
}).$mount('#app')
