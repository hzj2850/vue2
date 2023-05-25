<script>
import moment from 'moment';
export default {
    props: {
        value: {
            type: String | undefined
        },
        vformat: {
            type: String,
            default: "YYYY-MM-DD"
        }
    },
    model: {
        prop: "value",
        event: "change",
    },
    data() {
        return {
            show: false
        }
    },
    render(h) {
        const props = this.$props;

        const attrs = {
            placeholder: "请选择",
            size: "large",
            format: "YYYY年M月D日",
            value: this.getTime(this.value),
            open: this.show,
            dropdownClassName: (this.$attrs.format || '').includes('Y') ? '' : 'no-year',
            ...this.$attrs,
        }

        const on = {
            ...this.$listeners,
            // time/date
            change: v => {
                this.$emit("change", v ? v.format(props.vformat): undefined);
            },
            // month/year
            panelChange: v => {
                this.show = false;
                this.$emit("change", v ? v.format(props.vformat): undefined);
            },
            openChange: v => {
                this.show = v
            }
        }

        return <a-date-picker class="my-date-picker" on={on} props={attrs} />
    },
    methods: {
        getTime(v) {
            if((/^[0-9]+$/).test(v) && v * 1 <= 12) {
                v = new Date().getFullYear() + '-' + (String(v).length === 1 ? '0' + v : v);
            }
            return v ? moment(v) : undefined;
        }
    },
}
</script>

<style lang="less" scoped>
.my-date-picker {
    width: 100%;
    font-size: @input-font-size;
    /deep/ .ant-input{
        height: @input-height;
        font-size: inherit;
    }
    /deep/ .anticon {
        font-size: @input-icon-size;
        width: initial;
        height: initial;
        transform: translateY(-50%);
        margin: 0;
    }
}
</style>
