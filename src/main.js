import Vue from 'vue'
import axios from './http'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import App from './App'

Vue.use(ElementUI)
Vue.prototype.axios = axios

new Vue({
    el: '#app',
    router,
    axios,
    template: '<App/>',
    components: {
        App
    }
})
