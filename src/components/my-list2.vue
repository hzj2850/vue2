<script>
export default {
    props: {
        // 头部配置
        columns: {
            type: Array,
            default: () => ([
                {slot: 'name', title: '姓名', style: {'color': 'red'}},
                {slot: 'age',  title: '年龄'},
                {slot: 'sex',  title: '性别'},
            ])
        },
        // 列表数据
        data: {
            type: Array,
            default: () => ([
                { name: '王二', age: 23, sex: '男' },
            ])
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
    data() {
        return {
            scrollLeft: 0,
            scrollTop: 0,
        }
    },
    render() {

        const vnodes = [this.columns, ...this.data].map((item, index) => {
            const is_head = item instanceof Array;

            const row = {
                class: {
                    'row': true,
                    'my-list-head': is_head,
                },
                on: {
                    click: () => this.$listeners.click && this.$listeners.click(item, index),
                    scroll: is_head ? e => {
                        this.scrollLeft = e.target.scrollLeft;
                        if(this.$refs.body) this.$refs.body.scrollLeft = this.scrollLeft;
                    } : false,
                },
                key: is_head ? 'head' : (item.id || item.ID),
            }
            const col = {
                class: { 'col': true }
            }

            return (<div {...row}>{this.columns.map(e => {
                const name = is_head ? e.slot+'-head' : e.slot,
                      param = is_head ? e : item,
                      title = is_head ? (e.title || this.default) : (item[e.slot] || this.default),
                      slot = this.$scopedSlots[name] ? this.$scopedSlots[name](param, index) : title;
                return (<div {...col} style={e.style}>{ slot }</div>);
            })}</div>);
        });

        const myList = {
            class: {
                'my-list': true,
            }
        }
        const b = {
            class: {
                'my-list-body': true
            },
            on: {
                scroll: e => {
                    this.scrollLeft = e.target.scrollLeft;
                    this.scrollTop = e.target.scrollTop;
                    if((vnodes[0] || {}).elm) vnodes[0].elm.scrollLeft = this.scrollLeft;
                }
            }
        }


        return <div {...myList}>
            { vnodes[0] }
            <div {...b} ref="body">
                <transition-group appear tag="div" class="group" name={this.transition} >{ vnodes.splice(1, vnodes.length) }</transition-group>
            </div>
        </div>;
    }
}
</script>

<style lang="less" scoped>
.my-list{
    border: 1px solid red;
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    // 列表样式
    .row{
        display: flex;
        min-height: 90px;
        > .col {
            flex: 1;
            position: relative;
            background: rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            &::before{
                content: '';
                display: block;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                border-left: 1px solid rgba(222, 222, 222, 0.5);
                width: 0;
                height: calc(100% - 20px);
            }
            &:first-child::before{
                display: none;
            }
        }
    }

    // 头部
    .my-list-head, .my-list-body{
        overflow: auto;
        width: 100%;
        // 隐藏滚动条
        scrollbar-width: none; // 火狐
        &::-webkit-scrollbar{
            width: 0 !important;
            height: 0 !important;
        }
    }

    // 列表
    .my-list-body{
        height: 400px;
        margin-top: 1px;
        .row{
            margin-bottom: 1px;
        }
    }
}
</style>