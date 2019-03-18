import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [{
        path: '/button',
        component: () => import('../page/button')
    },
    {
        path: '/select',
        component: () => import('../page/select')
    },
    {
        path: '/banner',
        component: () => import('../page/banner')
    },
    {
        path: '/rotate',
        component: () => import('../page/rotate')
    },
    {
        path: '/text',
        component: () => import('../page/text')
    },
    {
        path: '/switch',
        component: () => import('../page/switch')
    },
    {
        path: '/image',
        component: () => import('../page/image')
    },
    {
        path: '/modal',
        component: () => import('../page/modal')
    },
    {
        path: '/checkbox',
        component: () => import('../page/checkbox')
    },
    {
        path: '/lucky',
        component: () => import('../page/lucky')
    },
    {
        path: '/editor',
        component: () => import('../page/editor')
    },
    {
        path: '/reg',
        component: () => import('../page/reg')
    },
    {
        path: '/monacoEditor',
        component: () => import('../page/vue-monaco-editor')
    },
    {
        path: '*',
        redirect: '/button'
    }]


export default new VueRouter({
    routes,
    // mode: 'history',
    base: '/jj-vue-components/dist/'
})