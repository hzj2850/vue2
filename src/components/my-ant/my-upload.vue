<script>
export default {
    props: {
        // 上传函数
        upload: {
            type: Function,
            default: () => (function(){})
        }
    },
    render() {
        const nodes = Object.keys(this.$slots).map(name => (<slot slot={name}>{this.$slots[name]}</slot>))
        const props = {
            fileList: [],
            customRequest: this.customRequest,
            ...this.$attrs,
        }
        const on = {
            ...this.$listeners,
            change: function(){}, // 阻止触发表单验证
        }
        return <a-upload-dragger on={on} props={props} class="my-upload">{ nodes }</a-upload-dragger>
    },
    methods: {
        customRequest(o) {
            const that = this;
            const obj = new FileReader();
            obj.readAsDataURL(o.file);
            obj.onloadend = function (e) {
                const result = { url: e.target.result, file: o.file };
                that.upload(result).then(() => {
                    that.$emit('change'); // 触发验证
                })
            }
        }
    },
}
</script>

<style lang="less" scoped>
.has-error{
    .my-upload{
        border: 1px solid red;

    }
}
.my-upload{
    display: block;
    height: @input-height;
    line-height: @input-height;
    font-size: @input-font-size;
    border-radius: 4px;
    /deep/ .ant-upload{
        padding: 0;
        border: none;
        border-radius: 0;
        background: transparent;
        display: block;
        color: inherit;
        line-height: inherit;
        font-size: inherit;
    }
    /deep/ .ant-upload-drag-container{
        display: block;
        height: 100%;
    }
}
</style>