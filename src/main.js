// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

import './common/stylus/index.styl'

// 注册
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})*/



// 定义路由组件 可从其他文件import进来

/*const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
*/
const routes = [
	{ path: '/goods', component: goods },
	{ path: '/ratings', component: ratings },
	{ path: '/seller', component: seller }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

const app = new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')

router.push('./goods')

