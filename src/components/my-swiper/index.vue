<template>
    <div style="position: relative;">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <slot>
                    <div class="swiper-slide"> Slide1</div>
                </slot>
            </div>
        </div>
        <div class="pagination"/>
        <div :class="['next', {'no_next': activeIndex + 1 == total}]" @click="next()">
            <slot name="next">next</slot>
        </div>
        <div :class="['prev' ,{'no_prev': activeIndex == 0}]" @click="prev()">
            <slot name="prev">prev</slot>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
var mySwiper = null;
export default {
    props: {
        cfig: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data() {
        return {
            activeIndex: 0,
            total: 0, // 总长度
        }
    },
    mounted() {
        let _this = this;
        mySwiper = new Swiper('.swiper-container',{
            loop: !!this.loop,
            autoplay: this.autoplay ? parseFloat(this.autoplay) : undefined,
            pagination : '.pagination',
            paginationClickable :true,
            resizeReInit: true, // 设置为true则windows改变尺寸时swiper会重新初始化。
            resistance: true,
            noSwiping : true, // 设为true时，可以在slide上增加类名'swiper-no-swiping'，使该slide无法滑动
            onSwiperCreated: function(s) {
                _this.total = s.slides.length;
            },
            onSlideChangeEnd: function(s) {
                _this.activeIndex = s.activeIndex;
            },
            ...this.cfig,
        })
    },
    beforeDestroy() {
        mySwiper = null;
    },
    methods: {
        next() {
            mySwiper.swipeNext();
        },
        prev() {
            mySwiper.swipePrev();
        },
    },
}
</script>

<style lang="less" scoped>
.swiper-container{
    height: 100%;
    width: 100%;
}

.next, .prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    user-select: none;
    cursor: pointer;
    font-size: 20px;
    z-index: 666;
    color: rgb(2, 197, 248);
}
.prev{
    left: 10px;
}
.next{
    right: 10px;
}
.no_next, .no_prev{
    color: rgb(8, 72, 138);
    pointer-events: none;
}
</style>