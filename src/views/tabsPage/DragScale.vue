<template>
    <div>
        <div class="move" ref="b">
            <img src="../../assets/images/liya.jpg" ref="t">
        </div>
    </div>
</template>

<script>
import DragScale from '@/utils/DragScale.js'
export default {
    mounted() {
        const drag = new DragScale({
            b: this.$refs.b,
            t: this.$refs.t
        });
        console.log('拖拽：',drag)
    },
}
</script>

<style lang="less" scoped>
.move{
    border: 10px solid red;
    width: 60vw;
    height: 60vh;
    overflow:hidden;
    text-align: center;
    margin: 50px auto;
    img{
        // width: 100%;
        height: 100%;
        border: 1px solid blue;
    }
}
</style>
