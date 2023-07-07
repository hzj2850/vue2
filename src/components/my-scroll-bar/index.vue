<script>
import xBar from './xBar.vue'
import yBar from './yBar.vue'
import ResizeObserver from 'resize-observer-polyfill';
export default {
    components: { xBar, yBar },
    props: {
        // 是否显示滚动条
        bar: {
            type: Boolean,
            default: true
        },
    },
    data() {
        return {
            xo: {
                show: false,
                left: 0,
                width: 0,
            },
            yo: {
                show: false,
                top: 0,
                height: 0,
            },
            lt: {
                left: 0,
                top: 0,
            },
            ro: null, // ResizeObserver 对象
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
                scroll: e => this.bindScroll(e.target, 'scroll'),
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
            { this.bar ? <xBar {...xb} ref="xBar"></xBar> : '' }
            { this.bar ? <yBar {...yb} ref="yBar"></yBar> : '' }
            
            <div {...b} ref="body">
                { this.$slots.default }
            </div>
        </div>
    },
    mounted() {
        if(this.bar) this.resize();
    },
    // 停止监听元素
    beforeDestroy() {
        const ro = this.ro, r = this.$refs, b = r.body, c = b ? b.querySelector('.group') : '';
        if(ro) {
            b && ro.unobserve(b);
            c && ro.unobserve(c);
        }
    },
    methods: {
        // 监听可视区变化
        resize() {
            const ro = new ResizeObserver(() => this.setSize()),
                  b = this.$refs.body,
                  c = b ? b.querySelector('.group') : '';
            if(!c) return alert('请用类名为group的盒子包裹内容');
            c && ro.observe(c); // 高度变化
            b && ro.observe(b); // 宽度变化
            this.ro = ro;
        },
        // 初始化宽高
        setSize() {
            const r = this.$refs, b = r.body, x = r.xBar, y = r.yBar;

            this.xo.show = b.clientWidth < b.scrollWidth;
            this.yo.show = b.clientHeight < b.scrollHeight;
            this.$nextTick(function() {
                var w = parseInt(b.clientWidth / b.scrollWidth * x.getBar2()),
                    h = parseInt(b.clientHeight / b.scrollHeight * y.getBar2());
                if(this.xo.show) this.xo.width = w >= 20 ? w : 20;
                if(this.yo.show) this.yo.height = h >= 20 ? h : 20;
                this.$nextTick(() => this.bindScroll(b));
            })
        },
        // 滚动监听
        bindScroll(e, _t) {
            if(_t === 'scroll') {
                this.lt.left = e.scrollLeft;
                this.lt.top = e.scrollTop;
                this.$emit('call', this.lt);
            }

            let r = this.$refs,
                x = r.xBar,
                y = r.yBar,
                w = x ? x.getBar() : 0,
                h = y ? y.getBar() : 0,
                l = w ? Math.round(e.scrollLeft / (e.scrollWidth - e.clientWidth) * w) : 0,
                t = h ? Math.round(e.scrollTop / (e.scrollHeight - e.clientHeight) * h) : 0;
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
            if(t === 'y') {
                type === 'click' ? b.scrollTo({top: value, behavior: 'smooth'}) : b.scrollTop = value;
            } else {
                type === 'click' ? b.scrollTo({left: value, behavior: 'smooth'}) : b.scrollLeft = value;
            }
        },
        // 设置滚动条位置
        scrollTo(o = {}) {
            if(JSON.stringify(o) === '{}') o = this.lt;
            this.$refs.body.scrollTo(o);
        },
        // 用于没有数据时，头部列表需要滚动
        setCtx(v) {
            this.$refs.body.querySelector('.group').style.width = v + 'px';
        },
    },
}
</script>

<style lang="less" scoped>
.my-scroll-bar{
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