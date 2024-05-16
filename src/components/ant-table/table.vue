<script>
import AntLayout from '../ant-layout/index.vue'
import { setData } from './cfig'
import { ScrollFn, moveScrollBar } from './fn'
export default {
    components: {
        AntLayout
    },
    props: {
        columns: {
            type: Array,
            default: () => ([])
        },
        listdata: {
            type: Array,
            default: () => ([])
        },
    },
    render(h) {
        const tbody = h('ant-layout', { attrs: { layout: setData(this) }, scopedSlots: this.$scopedSlots });
        const vNode = h('div', { class: 'ant-table-body' }, [tbody]);
        return h('div', { class: 'ant-table' }, [<h1>header</h1>, vNode, <div>footer</div>]);
    },
    mounted() {
        const el = this.$el.querySelector('.ant-table-body');
        const child = el.querySelector('table');
        ScrollFn(el);
        moveScrollBar(el, child);
    }
}
</script>

<style lang="less" scoped>
@import url('./shadow.less');
.ant-table{
    height: 600px;
    position: relative;
    background: #fff;
    padding: 10px;
    color: #333;
}
.ant-table-body{
    overflow: auto;
    text-align: center;
    border: 1px solid #d9d9d9;
    border-left: none;
    max-height: calc(100% - 90px);
    /deep/ table{
        width: 100%;
        border-spacing: 0;
        th, td{
            height: 45px;
            box-shadow: 1px -1px 0 #d9d9d9 inset;
            background: #fff;
            position: relative;
        }
        thead{
            position: sticky;
            z-index: 3;
            top: 0;
            th{
                height: 40px;
                background: #f5f5f5 !important;
            }
        }

        tr{
            &:hover{
                td, th{
                    background: rgb(230, 243, 252) !important;
                }
            }
        }
        tbody{
            background: blue;
        }

        tbody > tr:last-child > td{
            box-shadow: 1px 0 0 #d9d9d9 inset;
        }
    }
}
</style>