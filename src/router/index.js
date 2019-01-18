import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    {
        path: '/select',
        component: ()=>import('../page/select')
    },
    {
        path: '/banner',
        component: ()=>import('../page/banner')
    },
    {
        path: '/button',
        component: ()=>import('../page/button')
    }
]


export default new VueRouter({
    routes
})
