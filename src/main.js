// 兼容IE
import '@babel/polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// ul库 【Ant Design Vue】
import Antd from './utils/ant'
Vue.use(Antd);

// ul库 二次封装
import AntCom from './components/ant-form/index'
Vue.use(AntCom);

// 加载中动画 this.$loading();
import Loading from './components/loading/index'
Vue.use(Loading);

// 爆布流
// import scrollreveal from './utils/setting/scrollreveal'
// Vue.use(scrollreveal);

// 轮播图、图片懒加载
import Viewer from './utils/setting/v-viewer'
import VLazy from './utils/setting/vLazy'
Vue.use(Viewer);
Vue.use(VLazy);

// 全局（指令、变量、过滤器）
import Directives from './utils/setting/directive'
import Prototype from './utils/setting/prototype'
import Filter from './utils/setting/filters'
Vue.use(Directives);
Vue.use(Prototype);
Vue.use(Filter);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
