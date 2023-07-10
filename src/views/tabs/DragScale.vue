<template>
    <div>
        <div class="move" ref="b">
            <img v-lazy="require('@/assets/img/swiper/1.jpg')" ref="t">
        </div>
    </div>
</template>

<script>
import DragScale from '@/utils/DragScale.js'
export default {
    mounted() {
        DragScale.drag({
            scope: this.$refs.b,
            target: this.$refs.t,
            change: o => {
                o.target.style.left = o.x + 'px';
                o.target.style.top = o.y + 'px';
            }
        })
        DragScale.scale({
            scope: this.$refs.t,
            minScale: 0.2,
            maxScale: 5,
            change: o => {
                o.target.style.left = o.x + 'px';
                o.target.style.top = o.y + 'px';
                o.target.style.transform = 'scale(' + o.scale + ')';
            }
        })
    },
}
</script>

<style lang="less" scoped>
.move{
    border: 1px solid #02c5f8;
    border-radius: 10px;
    width: 60vw;
    height: 60vh;
    overflow:hidden;
    text-align: center;
    margin: 50px auto;
    img{
        // width: 100%;
        // height: 100%;
        object-fit: none;
        position: relative;
    }
}
</style>
