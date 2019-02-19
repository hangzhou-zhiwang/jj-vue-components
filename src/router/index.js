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
    },
    {
        path: '/rotate',
        component: ()=>import('../page/rotate')
    },
    {
        path: '/text',
        component: ()=>import('../page/text')
    },
    {
        path: '/lucky',
        component: ()=>import('../page/lucky')
    },
    {
        path: '/editor',
        component: ()=>import('../page/editor')
    },
    {
        path:'*',
        redirect:'/button'
    }
]


export default new VueRouter({
    routes,
    // mode: 'history',
    base:'/jj-vue-components/dist/'
})
