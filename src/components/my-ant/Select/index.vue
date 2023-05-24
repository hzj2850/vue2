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
    },
    model: {
        prop: "id",
        event: "change",
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