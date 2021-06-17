import Vue from 'vue'
import App from './App.vue'
import VueImageHandler from '../packages/index'

Vue.config.productionTip = false
Vue.use(VueImageHandler)
new Vue({
  render: h => h(App),
}).$mount('#app')
