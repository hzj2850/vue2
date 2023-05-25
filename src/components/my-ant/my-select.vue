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
            default: () => ([
                {id: 1, text: '王二'},
                {id: 2, text: '张三'},
                {id: 3, text: '李四'},
            ])
        },
    },
    model: {
        prop: "id",
        event: "change",
    },
    watch: {
        id(v) {
            const o = this.list.find(e => e.id === v) || {};
            this.$emit('update:text', o.text);
        },
    },
    render() {
        const list = this.$props.list.map(e => <a-select-option value={ e.id }>{ e.text }</a-select-option>);
        const props = {
            value: this.$props.id,
            filterOption: (input, option) => option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0,
            placeholder: "请选择",
            ...this.$attrs,
        }
        const on = {
            change: (v) => this.$emit("change", v),
        }
        return <a-select on={on} props={props}>
            { list }
        </a-select>
    },
}
</script>

<style lang="less" scoped>
.ant-select{
    width: 100%;
    font-size: @input-font-size;
    /deep/ .ant-select-selection {
        height: @input-height;
    }
    /deep/ .ant-select-selection__rendered{
        line-height: calc(@input-height - 2px);
    }
    /deep/ .ant-select-arrow, /deep/ .ant-select-selection__clear{
        font-size: @input-icon-size;
        margin: 0;
        transform: translateY(-50%);
        width: initial;
        height: initial;
    }
}
</style>