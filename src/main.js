import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import '@/assets/css/styles.css'
import VueClazyLoad from 'vue-clazy-load';

Vue.config.productionTip = false

Vue.use(VueClazyLoad);

Vue.use(VueScrollTo,  {
  container: "body",
  duration: 800,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  render: h => h(App),
}).$mount('#app')
