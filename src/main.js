import Vue from 'vue'
import App from './App.vue'
import router from './router'

import JJCom from './service/components/index.js'
import Message from './components/message/index.js'

Vue.config.productionTip = false
Vue.prototype.$_c="https://github.com/hangzhou-zhiwang/jj-vue-components/tree/master/src/components"
Vue.use(JJCom)


Vue.prototype.$message = Message.install;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
