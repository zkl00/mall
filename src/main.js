import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'//轮播图
import 'swiper/dist/css/swiper.css'//轮播图样式
//挂在事件总线
Vue.prototype.$bus = new Vue()

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
