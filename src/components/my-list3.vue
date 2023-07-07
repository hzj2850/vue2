<script>
import MyScrollBar from '@/components/my-scroll-bar'
export default {
    props: {
        // 头部配置
        columns: {
            type: Array,
            default: () => ([{slot: 'id', title: 'id', style: {'color': 'red'}}])
        },
        // 列表数据
        data: {
            type: Array,
            default: () => ([{id: 1}])
        },
        // 没有数据时的占位符
        default: {
            type: String,
            default: "--"
        },
        // 过渡动画
        transition: {
            type: String,
            default: 'v'
        },
        bar: {
            type: Boolean,
            default: false
        }
    },
    components: { MyScrollBar },
    data() {
        return {
            scrollLeft: 0,
            scrollTop: 0,
        }
    },
    render() {
        const rows = this.data.map((item, index) => {

            const cols = this.columns.map(e => {
                const col = {
                    class: { 'col': true },
                    style: e.style
                }
                return <span {...col}>
                    { this.$scopedSlots[e.slot] ? this.$scopedSlots[e.slot](item, index) : item[e.slot] || this.default }
                </span>
            })

            const row = {
                class: {
                    'row': true,
                },
                on: {
                    click: () => this.$listeners.click && this.$listeners.click(item, index)
                },
                key: item.id || item.ID,
            }
            return (<li {...row}>{ cols }</li>);
        });

        const cols = this.columns.map(e => {
            return <div class="col" style={e.style}>
                { this.$scopedSlots[e.slot+'-head'] ? this.$scopedSlots[e.slot+'-head'](e) : e.title }
            </div>
        })

        return <div class="my-list-3">
            <div class="row head" ref="head" on={{scroll: e => this.scroll(e)}}>{ cols }</div>
            <my-scroll-bar ref="bar" bar={this.bar} on={{call: e => this.call(e)}}>
                <transition-group class="group" appear tag="ul" name={this.transition}>
                    { rows }
                </transition-group>
            </my-scroll-bar>
        </div>
    },
    mounted() {
        this.setCtx();
    },
    methods: {
        setCtx() {
            const r = this.$refs, h = r.head;
            // 没有数据时，头部需要滑动
            if(h.scrollWidth > h.clientWidth) {
                r.bar && r.bar.setCtx(r.head.scrollWidth);
            }
        },
        scroll(e) {
            this.$refs.bar.scrollTo({
                left: e.target.scrollLeft,
                top: e.target.scrollTop,
            })
        },
        call(o) {
            const d = this.$refs.head;
            d && d.scrollTo(o);
        },
    },
}
</script>

<style lang="less" scoped>
.my-list-3{
    width: 100%;
    height: 60vh;
    > .head{
        overflow: auto;
        scrollbar-width: none; // 兼容火狐
        -ms-overflow-style: none; // 兼容IE10+
        -webkit-overflow-scrolling: touch; // 解决 ios 上滑动不流畅
        &::-webkit-scrollbar { // 隐藏滚动条，兼容 chrome 和 safari 浏览器
            display: none;
        }
    }
}
.my-scroll-bar{
    width: 100%;
    height: calc(100% - 70px);
}
.group{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.row{
    display: flex;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid transparent;
    width: 100%;
}
.col{
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 70px;
    flex: 1;
    &::before{
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: calc(100% - 20px);
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    &:first-child::before{
        display: none;
    }
}
</style>
