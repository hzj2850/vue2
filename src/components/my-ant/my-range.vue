<script>
import moment from 'moment';
export default {
    props: {
        start: {
            type: String
        },
        end: {
            type: String,
        }
    },
    model: {
        prop: "start",
        event: "change",
    },
    render() {
        const props = this.$props;

        const attrs = {
            format: 'YYYY年M月D日',
            ...this.$attrs,
            value: [ props.start ? moment(props.start) : undefined, props.end ? moment(props.end): undefined],
        }

        const on = {
            ...this.$listeners,
            change: v => {
                this.$emit("change", v[0] ? v[0].format('YYYY-MM-DD HH:mm:ss') : undefined);
                this.$emit('update:end', v[1] ? v[1].format('YYYY-MM-DD HH:mm:ss') : undefined);
            },
        }
        return <a-range-picker on={on} props={attrs}></a-range-picker>
    },
    watch: {
        start(v) {
            // 防止用户使用清除按钮
            if(!v && this.end) this.$emit('update:end', undefined);
        }
    },
}
</script>

<style lang="less" scoped>
.ant-calendar-picker {
    width: 100%;
    font-size: @input-font-size;
    height: @input-height;
    /deep/ .ant-calendar-picker-input{
        font-size: inherit;
        height: inherit;
    }
    /deep/ .ant-calendar-picker-icon, /deep/ .anticon {
        margin: 0;
        height: @input-icon-size;
        width: @input-icon-size;
        font-size: @input-icon-size;
        transform: translateY(-50%);
    }
}
</style>