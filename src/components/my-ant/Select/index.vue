<script>
export default {
    props: {
        id: {
            type: [Number, String]
        },
        text: {
            type: [Number, String]
        },
        list: {
            type: Array,
            required: true
        },
        // 是否可搜索
        showSearch: {
            type: Boolean,
            default: false,
        },
    },
    // 这里用来定义v-model的值
    model: {
        prop: "id",
        event: "change",
    },
    render(h) {
        return h(
            'a-select', 
            {
                class: [
                    'my-select',
                ],
                props: {
                    value: this.id === 0 ? 0 : (this.id || undefined),
                    showSearch: this.showSearch,
                    placeholder: "请选择",
                },
                on: {
                    // 更新数据
                    change: (v) => {
                        this.$emit("change", v);
                    },
                    // 对选项进行搜索
                    filterOption: (input, option) => {
                        return ( option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0 );
                    }
                }
            }, 
            // 嵌套到 this.tag 元素上
            this.list.map(item=>
                h(
                    'a-select-option', 
                    {
                        props:{
                            value: item.id,
                        }
                    }, 
                    item.text
                )
            )
        );
    },
    watch: {
        id(v) {
            const o = this.list.find(e => e.id === v) || {};
            this.$emit('update:text', o.text);
        },
    },
}
</script>

<style lang="less" scoped>
.my-select{
    width: 100%;
    min-width: 120px;
}
</style>