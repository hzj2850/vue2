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
            vm.$store.commit('SET_PUSH_KEEPALIVE', vm.$options.name);

            // 防止在当前缓存页面点击刷新
            if(from.path !== '/') {
                const oldv = sessionStorage.getItem('keepAlivePath');
                if(!oldv) sessionStorage.setItem('keepAlivePath', from.path);
            }
        });
    },
    beforeRouteLeave(to, from, next) {
        if(to.meta.obj) to.meta.obj = {};
        
        // 退出缓存页面
        const oldv = sessionStorage.getItem('keepAlivePath');
        if(oldv && oldv === to.path) {
            this.$store.commit('SET_DEL_KEEPALIVE', this.$options.name);
            sessionStorage.removeItem('keepAlivePath');
        }
        next();
    },
}
