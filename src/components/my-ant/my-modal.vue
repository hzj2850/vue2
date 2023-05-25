<script>
export default {
    props: {
        type: {
            type: String,
            default: 'modal'
        }
    },
    data() {
        return {
            visible: false
        }
    },
    render() {
        const nodes = Object.keys(this.$slots).map(name => (<slot slot={name}>{this.$slots[name]}</slot>));
        
        // 对话框镶入页面
        if(this.$props.type === 'div') return <div>{ nodes }</div>

        // 对话框
        const props = {
            centered: true,
            maskClosable: false,
            visible: this.$data.visible,
            wrapClassName: 'my-modal',
            ...this.$attrs,
        }
        const on = {
            cancel: () => this.$data.visible = false,
            ...this.$listeners
        }
        return <a-modal on={on} props={props}>{ nodes }</a-modal>
    },
    methods: {
        open() {
            this.visible = !this.visible;
        },
    },
}
</script>