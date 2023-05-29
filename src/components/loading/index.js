import Loading from './index.vue'
const obj = {}
obj.install = function(Vue){
    // 1、创建组件构造器
    const _contrustor = Vue.extend(Loading);
    // 2、new 的方式，根据组件构造器，可以创建出来一个组件对象
    const com = new _contrustor();
    // 3、将该组件对象手动挂载到某一个 div 上
    com.$mount(document.createElement('div'));
    // 4、$el 对应的就是上面创建的 div
    document.body.appendChild(com.$el);
    // 5、添加到原型
    Vue.prototype.$loading = o => com.show(o);
}

export default obj;
