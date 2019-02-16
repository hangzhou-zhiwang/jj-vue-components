import Vue from 'vue'
import App from './App.vue'
import router from './router'

import JJCom from './service/components/index.js'

Vue.config.productionTip = false
Vue.prototype.$_c="https://github.com/Javison666/jj-vue-components/tree/master/src/components"
Vue.use(JJCom)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
