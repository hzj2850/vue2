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
    render() {
        const myList = {
            class: {
                'my-list': true,
            }
        }

        const vnodes = [this.columns, ...this.data].map((item, index) => {
            const is_head = item instanceof Array;

            const row = {
                class: {
                    'row': true,
                    'my-list-header': is_head,
                },
                on: {
                    click: () => this.$listeners.click && this.$listeners.click(item, index),
                },
                key: is_head ? 'head' : item.id || item.ID,
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

        return <div {...myList}>
            { vnodes[0] }
            <transition-group appear tag="div" name={this.transition} class="my-list-body">{ vnodes.splice(1, vnodes.length) }</transition-group>
        </div>;
    }
}
</script>

<style lang="less" scoped>
// 列表默认样式
.my-list{
    text-align: center;
    overflow: auto;
    .row{
        display: flex;
        > .col {
            flex: 1;
            position: relative;
            &::before{
                content: '';
                display: block;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translate(-50%, -50%);
                border-left: 1px solid #999;
                width: 0;
                height: 70%;
            }
            &:first-child::before{
                display: none;
            }
        }
    }
}

// 头部
.my-list-header{
    z-index: 10;
    > .col{
        background: rgba(255, 255, 255, 0.2);
    }
}

// 列表
.my-list-body{
    > .row{
        margin-top: 1px;
        > .col{
            background: rgba(255, 255, 255, 0.1);
        }
    }
}
</style>