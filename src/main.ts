import Vue from 'vue'
import VueSSE from 'vue-sse'
import App from './App.vue'

// Use VueSSE, including a polyfill for older browsers
Vue.use(VueSSE, {
  polyfill: true
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
