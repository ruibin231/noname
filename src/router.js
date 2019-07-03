import Vue from 'vue'
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
