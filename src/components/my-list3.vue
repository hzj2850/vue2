<script>
import MyScrollBar from '@/components/my-scroll-bar'
export default {
    props: {
        // 头部配置
        columns: {
            type: Array,
            default: () => ([{slot: 'name', title: '姓名', style: {'color': 'red'}}])
        },
        // 列表数据
        data: {
            type: Array,
            default: () => ([{ name: '王二', age: 23, sex: '男' }])
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
        const vnodes = this.data.map((item, index) => {
            const cols = this.columns.map(e => {
                const col = {
                    class: { 'col': true },
                    style: e.style
                }
                return (<span {...col}>{ this.$scopedSlots[e.slot] ? this.$scopedSlots[e.slot](e, index) : item[e.slot] || this.default }</span>);
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
        return <div class="my-list-3">
            <div class="row">
                {this.columns.map(e => (<div class="col" style={e.style}>{e.title}</div>))}
            </div>
            <my-scroll-bar ref="bar">
                <transition-group class="group" appear tag="ul" name={this.transition} >{ vnodes }</transition-group>
            </my-scroll-bar>
        </div>
    }
}
</script>

<style lang="less" scoped>
.my-list-3{
    border: 1px solid red;
    width: 60%;
    height: 400px;
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
    line-height: 70px;
    border-top: 1px solid transparent;
    text-align: center;
}
.col{
    background: rgba(255, 255, 255, 0.1);
    position: relative;
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
