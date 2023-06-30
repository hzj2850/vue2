<script>
import xBar from './xBar.vue'
import yBar from './yBar.vue'
import ResizeObserver from 'resize-observer-polyfill';
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
                call: e => this.setXY(e.x, 'x'),
            }
        }

        const yb = {
            attrs: this.yo,
            on: {
                call: e => this.setXY(e.y, 'y'),
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
            const ro = new ResizeObserver(() => {
                this.setSize();
            });
            ro.observe(this.$refs.ctx);
            ro.observe(this.$refs.body);
        },
        // 初始化宽高
        setSize() {
            const r = this.$refs, b = r.body, c = r.ctx, xBar = r.xBar, yBar = r.yBar;
            if(!b) return;
            this.xo.show = b.clientWidth < b.scrollWidth;
            this.yo.show = b.clientHeight < b.scrollHeight;
            var w = parseInt(b.clientWidth / c.scrollWidth * xBar.getBar()),
                h = parseInt(b.clientHeight / c.scrollHeight * yBar.getBar());
            if(this.xo.show) this.xo.width = w >= 20 ? w : 20;
            if(this.yo.show) this.yo.height = h >= 20 ? h : 20;
            this.bindScroll(b);
        },
        // 滚动监听
        bindScroll(e) {
            const r = this.$refs, xBar = r.xBar, yBar = r.yBar;
            this.xo.left = Math.ceil(e.scrollLeft / (e.scrollWidth - e.clientWidth) * xBar.getBar());
            this.yo.top = Math.ceil(e.scrollTop / (e.scrollHeight - e.clientHeight) * yBar.getBar());
        },
        // 滑动滑块，设置滚动条位置
        setXY(v = 0, t = 'x') {
            const r = this.$refs, b = r.body,
                  m = t === 'y' ? r.yBar.getBar() : r.xBar.getBar(),
                  w = t === 'y' ? b.scrollHeight - b.clientHeight : b.scrollWidth - b.clientWidth,
                  l = v <= 0 ? 0 : v >= m ? m : v,
                  value = parseInt((l / m) * w);
            if(t === 'y') b.scrollTop = value;
            else b.scrollLeft = value;
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