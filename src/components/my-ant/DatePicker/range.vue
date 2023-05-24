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
    render(h) {
        return h(
            'a-range-picker',
            {
                class: [
                    'my-picker',
                ],
                props: {
                    value: [ this.start ? moment(this.start) : undefined, this.end ? moment(this.end): undefined],
                    format: 'YYYY年M月D日',
                },
                on: {
                    change: v => {
                        this.$emit("change", v[0] ? v[0].format('YYYY-MM-DD HH:mm:ss') : undefined);
                        this.$emit('update:end', v[1] ? v[1].format('YYYY-MM-DD HH:mm:ss') : undefined);
                    },
                }
            }
        )
    },
    watch: {
        start(v) {
            if(v == undefined && this.end) this.$emit('update:end', undefined);
        },
    },
}
</script>

<style lang="less" scoped>
.my-picker{
    width: 100%;
}
</style>