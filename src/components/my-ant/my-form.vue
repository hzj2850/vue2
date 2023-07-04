<script>
export default {
    props: {
        cfig: {
            type: Object,
            default: () => ({})
        }
    },
    render() {
        const form = {
            props: {
                ...this.$attrs
            },
            class: {
                'my-form': true
            }
        }
        const rules = this.$attrs.rules || {};
        const vNodes = Object.keys(rules).map(k => <a-form-model-item prop={k} {...this.cfig[k]}>{ this.$slots[k] || k }</a-form-model-item>);

        return <a-form-model ref="myForm" {...form}>{ vNodes }</a-form-model>
    },
    methods: {
        // 提交
        validate(fn) {
            const d = this.$refs.myForm;
            d.validate(r => {
                this.$nextTick(() => {
                    let m = '', e = d.$el.querySelector('.has-error');
                    if(e) m = e.querySelector('.ant-form-explain').innerText;
                    fn && fn(r, m);
                })
            });
        },
        // 清空
        resetFields() {
            this.$refs.myForm.resetFields();
        },
    },
}
</script>

<style lang="less" scoped>
.my-form{
    /deep/ .ant-form-item{
        margin-bottom: 20px;
        line-height: 45px;
        font-size: inherit;
        .ant-form-explain{
            position: absolute;
            left: 0;
            top: 100%;
        }
        .ant-form-item-label{
            line-height: unset;
            > label{
                color: inherit;
                font-size: inherit;
            }
        }
        .ant-form-item-control{
            line-height: unset;
        }
    }
}
</style>