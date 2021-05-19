import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueCookies from 'vue-cookies';
import './plugins/element.js'
import './assets/css/global.css'
import './utils/flexible.js'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false;
Vue.use(VueCookies);

Vue.use(VueAnalytics, {
    id: 'UA-191816204-1',
    router

})
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Promise } from 'core-js'


Vue.prototype.axios = axios
axios.defaults.baseURL = 'http://api.geekpandashare.com/'

axios.interceptors.request.use(config => {
        NProgress.start()
            // config.headers.Authorization = window.sessionStorage.getItem('token')
        let token = sessionStorage.getItem('Authorization')
        if (!config.headers.hasOwnProperty('Authorization') && token) {
            config.headers.Authorization = token;
        }
        return config
    },
    error => {
        return Promise.reject(error)
    })
axios.interceptors.response.use(config => {
    NProgress.done()
    return config
})


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
        if (to.meta.title) {
            document.title = to.meta.title
        }
        next()
    }),
    router.afterEach((to, from) => {
        ga('set', 'page', to.path)
        ga('send', 'pageview')
    })
new Vue({

    router,
    store,
    render: h => h(App)
}).$mount('#app')