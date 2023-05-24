const install = (Vue) => {
    /**
     * 判断滚动条是否滚动到底部
     *  v-scroll="{
            scroll // 滚动回调
            distance // 设置底部的触发距离
        }"
     */
    Vue.directive('scroll', {
        // 指令第一次绑定到元素时调用
        bind(el, binding) {
            const obj = binding.value || {};
            let flag = false;
            el.onscroll = function() {
                const cxt_height = el.scrollHeight - el.clientHeight;
                const b = el.scrollTop + parseFloat(obj.distance || 0) >= cxt_height;
                obj.scroll && obj.scroll({
                    height: cxt_height,
                    scrollTop: el.scrollTop,
                    end: !flag && b,
                });
                flag = b;
            }
        },
        // 被绑定元素插入父节点时调用
        inserted(el, binding) {
            const obj = binding.value || {};
            obj.scroll && obj.scroll({
                init: true,
                initText: '加载第一页',
            });
        },
        // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
        componentUpdated(el, binding) {
            const obj = binding.value || {};
            obj.scroll && obj.scroll({
                height: el.scrollHeight - el.clientHeight,
                scrollTop: el.scrollTop,
                end: false,
            });
        },
        // 只调用一次，指令与元素解绑时调用。
        unbind(el) {
            if(el.onscroll) el.onscroll = null;
        },
    })
}

export default install
