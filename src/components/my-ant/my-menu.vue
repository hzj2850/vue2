<script>
export default {
    props: {
        list: {
            type: Array,
            default: () => ([
                { key: '1', title: '1' },
                { key: '2', title: '2', child: [
                    { key: '2-1', title: '2-1' },
                    { key: '2-2', title: '2-2' },
                ]},
            ])
        }
    },
    render() {
        const slot = item => this.$scopedSlots['default'](item);
        const attrs = {
            mode: "inline",
            ...this.$attrs
        }
        const on = {
            ...this.$listeners
        }
        return <a-menu on={on} props={attrs}>{ this.filterData(this.list, slot) }</a-menu>
    },
    methods: {
        // 递归函数
        filterData(arr, fn) {
            let list = [];
            for(let item of arr) {
                if(item.child) {
                    list.push(<a-sub-menu {...{key: item.key}}>
                        <span {...{slot: 'title'}}>{ fn(item) }</span>
                        {this.filterData(item.child, fn)}
                    </a-sub-menu>);
                } else {
                    list.push(<a-menu-item {...{key: item.key}}>{ fn(item) }</a-menu-item>);
                }
            }
            return list;
        }
    },
}
</script>