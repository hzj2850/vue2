/* 
    "vue-lazyload": "^1.3.3", 兼容ie9
    使用说明: https://blog.csdn.net/hh3167253066/article/details/121143985
*/
import VueLazyLoad from 'vue-lazyload'
const install = Vue => {
    Vue.use(VueLazyLoad, {
        preLoad: 1.3,
        // error: require('@/assets/images/02.png'),
        // loading: require('@/assets/images/loading.gif'),
        attempt: 2,
    })
}

export default install;
