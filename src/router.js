import Vue from 'vue'
import Router from 'vue-router'
import index from 'src/pages/index'


Vue.use(Router)


const router = new Router({
    routes: [
        {
            path: '/',
            name: '主页',
            component: index,
        },
        
    ]
})

export default router
