// 引入@babel/polyfill处理兼容
import '@babel/polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import './utils/main/zoom'
import Antd from './utils/main/ant'
import Viewer from './utils/main/v-viewer'
import VueLazyLoad from './utils/main/vLazy'
import Directives from './plugins/directive'
import Prototype from './plugins/prototype'
import Filter from './plugins/filters'
Vue.use(Antd);
Vue.use(Viewer);
Vue.use(VueLazyLoad);
Vue.use(Directives);
Vue.use(Prototype);
Vue.use(Filter);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
