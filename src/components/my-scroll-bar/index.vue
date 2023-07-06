<script>
import xBar from './xBar.vue'
import yBar from './yBar.vue'
import DragScale from '@/utils/DragScale'
export default {
    components: {
        xBar,
        yBar,
    },
    data() {
        return {
            xo: {
                show: false,
                left: 0,
                width: 20,
            },
            yo: {
                show: false,
                top: 0,
                height: 20,
            },
        }
    },
    render() {
        const a = {
            class: {
                'my-scroll-bar': true,
            }
        }

        const b = {
            class: {
                'my-scroll-body': true,
            },
            on: {
                scroll: e => this.bindScroll(e.target),
            }
        }

        const xb = {
            attrs: this.xo,
            on: {
                call: e => this.setXY(e.x, 'x', e.type),
            }
        }

        const yb = {
            attrs: this.yo,
            on: {
                call: e => this.setXY(e.y, 'y', e.type),
            }
        }
        
        return <div {...a}>
            <xBar {...xb} ref="xBar"></xBar>
            <yBar {...yb} ref="yBar"></yBar>
            <div {...b} ref="body">
                <div class="ctx" ref="ctx">{ this.$slots.default }</div>
            </div>
        </div>
    },
    mounted() {
        this.resize();
    },
    methods: {
        // 监听可视区变化
        resize() {
            const drag = new DragScale();
            this.setSize();
            drag.addEvent(window, 'resize', () => this.setSize());
        },
        // 初始化宽高
        setSize() {
            const r = this.$refs, b = r.body, c = r.ctx, xBar = r.xBar, yBar = r.yBar;
            if(!b) return;
            this.xo.show = b.clientWidth < b.scrollWidth;
            this.yo.show = b.clientHeight < b.scrollHeight;
            this.$nextTick(function() {
                var w = parseInt(b.clientWidth / c.scrollWidth * xBar.getBar()),
                    h = parseInt(b.clientHeight / c.scrollHeight * yBar.getBar());
                if(this.xo.show) this.xo.width = w >= 20 ? w : 20;
                if(this.yo.show) this.yo.height = h >= 20 ? h : 20;
                this.bindScroll(b);
            });
        },
        // 滚动监听
        bindScroll(e) {
            const r = this.$refs, xBar = r.xBar, yBar = r.yBar, w = xBar.getBar(), h = yBar.getBar(),
                  l = Math.round(e.scrollLeft / (e.scrollWidth - e.clientWidth) * w) || 0,
                  t = Math.round(e.scrollTop / (e.scrollHeight - e.clientHeight) * h) || 0;
            this.xo.left = l + 1 >= w ? w : l;
            this.yo.top  = t + 1 >= h ? h : t;
        },
        // 滑动滑块，设置滚动条位置
        setXY(v = 0, t = 'x', type) {
            const r = this.$refs, b = r.body,
                  m = t === 'y' ? r.yBar.getBar() : r.xBar.getBar(),
                  w = t === 'y' ? b.scrollHeight - b.clientHeight : b.scrollWidth - b.clientWidth,
                  l = v <= 0 ? 0 : v >= m ? m : v,
                  value = parseInt((l / m) * w);
            if(t === 'y') type === 'click' ? b.scrollTo({top: value, behavior: 'smooth'}) : b.scrollTop = value;
            else type === 'click' ? b.scrollTo({left: value, behavior: 'smooth'}) : b.scrollLeft = value;
        },
    },
}
</script>

<style lang="less" scoped>
.my-scroll-bar{
    height: 60vh;
    width: 90%;
    position: relative;

    .my-scroll-body{
        width: 100%;
        height: 100%;
        overflow: auto;
        word-break: break-all;

        scrollbar-width: none; // 兼容火狐
        -ms-overflow-style: none; // 兼容IE10+
        -webkit-overflow-scrolling: touch; // 解决 ios 上滑动不流畅
        &::-webkit-scrollbar { // 隐藏滚动条，兼容 chrome 和 safari 浏览器
            display: none;
        }
    }
}
</style>