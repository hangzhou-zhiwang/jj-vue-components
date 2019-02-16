import CodeBox from './CodeBox'

export default {
    install: (Vue) => {
        // modal通用组件
        Vue.component('CodeBox', CodeBox)
    }
}