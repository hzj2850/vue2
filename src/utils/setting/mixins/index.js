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
        });
    },
    beforeRouteLeave(to, from, next) {
        if(to.meta.obj) to.meta.obj = {};
        next();
    },
}
