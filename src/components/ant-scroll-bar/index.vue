<template>
    <div class="ant-scroll-bar">1111111111111</div>
</template>

<script>
// import ResizeObserver from "./resize";
import {GlobalResizeObserver} from './GlobalResizeObserver'
export default {
    data() {
        return {
            observer: null
        };
    },
    mounted() {
        console.log(GlobalResizeObserver,'jjjjjjjjj')
        GlobalResizeObserver.observe(this.$el, r => {
            console.log('jjjjjj')
        })
        // const obs = new ResizeObserver(this.$el);
        // obs.callback = v => {
        //     console.log('jjjjjjj', v)
        // }
        // console.log(obs,'1111111111')
    },
};
</script>

<style lang="less" scoped>
.ant-scroll-bar{
    border: 1px solid red;
}
</style>