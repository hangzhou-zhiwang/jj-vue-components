import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    {
        path: '/select',
        component: ()=>import('../components/select')
    },
    {
        path: '/banner',
        component: ()=>import('../components/banner')
    }
]


export default new VueRouter({
    routes
})
