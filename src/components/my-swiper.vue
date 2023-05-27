<script>
import Swiper from "swiper";
import "swiper/dist/idangerous.swiper.css";
export default {
    props: {
        list: {
            type: Array
        },
        tip: {
            type: String,
            default: "index/total"
        }
    },
    data() {
        return {
            mySwiper: null,
            total: 0, // 总数
            activeIndex: 0, // 当前显示的下标
            oldData: [], // list 的旧数据
        }
    },
    watch: {
        list: {
            handler() {
                const total = this.list.length, o_total = (this.oldData || []).length;
                // 获取当前操作的下标
                let idx = -1;
                if(total > o_total) {
                    idx = this.list.findIndex((e, i) => {
                        const obj = this.oldData[i] || {};
                        return (obj.id || obj.ID) !== (e.id || e.ID);
                    });
                    // console.log('添加slide', idx);
                } else {
                    idx = this.oldData.findIndex((e, i) => {
                        const obj = this.list[i] || {};
                        return (obj.id || obj.ID) !== (e.id || e.ID);
                    });
                    // 防止删除最后一个
                    if(idx === total) idx = total - 1;
                    // console.log('删除slide', idx);
                }
                // 更新轮播图
                this.$nextTick(function() {
                    this.total = total;
                    this.oldData = [...this.list];
                    this.mySwiper.appendSlide("<div>更新轮播图</div>");
                    this.mySwiper.removeLastSlide();
                    idx >= 0 && this.mySwiper.swipeTo(idx, 500, true);
                })
            },
            immediate: true
        }
    },
    render() {
        const attrs = this.$attrs;
        // 上一页
        const Prev = {
            class: {
                prev: true,
                no_prev: (attrs.loop === false && this.activeIndex == 0) || this.total === 0,
            },
            on: {
                click: () => this.mySwiper.swipePrev()
            }
        }
        // 下一页
        const Next = {
            class: {
                next: true,
                no_next: (attrs.loop === false && this.activeIndex + 1 === this.total) || this.total === 0,
            },
            on: {
                click: () => this.mySwiper.swipeNext()
            }
        }
        
        // 轮播图slide列表
        const slidCfig = {
            class: {'swiper-slide': true, 'swiper-no-swiping': true}
        }
        const slides = this.$slots.slide ? this.$slots.slide.map(slot => <div {...slidCfig}>{ slot }</div>) : this.$slots.default;
        
        return (
            <div class="my-swiper">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        { slides }
                    </div>
                </div>
                <div class="pagination" />
                <div {...Prev}>{ this.$scopedSlots.prev ? this.$scopedSlots.prev() : 'prev' }</div>
                <div {...Next}>{ this.$scopedSlots.next ? this.$scopedSlots.next() : 'next' }</div>
                <div class="total-tip" domPropsInnerHTML={this.total ? this.tip.replace('index', this.activeIndex + 1).replace('total', this.total) : ''} />
            </div>
        )
    },
    mounted() {
        // 参数配置：https://2.swiper.com.cn/api/basic/2014/1213/18.html
        const that = this;
        this.mySwiper = new Swiper('.swiper-container',{
            autoplay: 5000, // 自动切换的时间间隔（单位ms）
            loop: true, // 开启循环
            mode: 'horizontal', // 设置水平(horizontal)或垂直(vertical)
            slidesPerView: 1, // 设置slider容器能够同时显示的slides数量
            noSwiping: false, // 设为true时，可以在slide上增加类名'swiper-no-swiping'，使该slide无法滑动
            initialSlide: 0, // 设定初始化时slide的索引
            // 当Swiper初始化完成，loop，pagination，等其他参数或方法生成之后执行
            onSwiperCreated: function(s) {
                that.total = s.slides.length;
            },
            // slider切换结束时执行。free模式下无效
            onSlideChangeEnd: function(s) {
                that.activeIndex = s.activeIndex;
            },

            pagination: '.pagination', // 分页器
            paginationClickable: true, // 值为true时，点击分页器的指示点时会发生Swiper
            ...this.$attrs,
        })
    },
    // 注销时清空缓存
    beforeDestroy() {
        this.mySwiper = null;
    },
}
</script>

<style lang="less" scoped>
.my-swiper{
    position: relative;
    height: 200px;
    width: 400px;
}
.swiper-container{
    border: 1px solid red;
    height: 100%;
    margin: 0;
}
.swiper-wrapper{
    height: 100%;
}

// 分页器
.pagination{
    text-align: center;
    position: absolute;
    left: 50%;
    bottom: 2%;
    z-index: 10;
    transform: translateX(-50%);
    /deep/ .swiper-pagination-switch{
        background: rgba(0, 0, 0, 0.5);
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-left: 10px;
        cursor: pointer;
        border: 1px solid rgba(255, 255, 255, 0.8);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        &:first-child{
            margin-left: 0;
        }
    }
    /deep/ .swiper-active-switch {
        background: rgba(255, 255, 255, 0.5);
    }
}

// 上一页/下一页
.prev, .next{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    user-select: none;
    z-index: 10;
    color: #02c5f8;
    font-size: 20px;
}
.prev{
    left: 10px;
}
.next {
    right: 10px;
}
.no_prev, .no_next {
    opacity: 0.5;
    cursor: auto;
}

// 下标提示
.total-tip{
    position: absolute;
    right: 10px;
    bottom: 2%;
    z-index: 10;
    text-shadow: 0 0 4px #000;
    color: #fff;
}

</style>