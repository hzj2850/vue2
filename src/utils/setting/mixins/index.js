// 获取上一页的参数
export const keepAlive = {
    data() {
        return {
            fromMeta: {},
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.fromMeta = from.meta.obj || {};

            const obj = vm.getKeepAliveObj(), name = obj.name, key = obj.key;
            if(!name) return alert("请为缓存组件添加组件名");
            vm.$store.commit('SET_PUSH_KEEPALIVE', name);
            to.meta.keepAlive = true;

            // 防止在当前缓存页面点击刷新
            if(from.path !== '/') {
                const oldv = sessionStorage.getItem(key);
                if(!oldv) sessionStorage.setItem(key, from.path);
            }
        });
    },
    beforeRouteLeave(to, from, next) {
        if(to.meta.obj) to.meta.obj = {};
        
        // 退出缓存页面
        const obj = this.getKeepAliveObj(), name = obj.name, key = obj.key, oldv = sessionStorage.getItem(key);
        if(oldv && oldv === to.path) {
            this.$store.commit('SET_DEL_KEEPALIVE', name);
            sessionStorage.removeItem(key);
        }
        next();
    },
    methods: {
        getKeepAliveObj() {
            const name = this.$options.name, key = 'keep-alive-' + name;
            return {name, key}
        },
    },
}
