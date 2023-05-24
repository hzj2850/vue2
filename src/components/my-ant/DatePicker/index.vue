<script>
import moment from 'moment';
export default {
    props: {
        // month、week
        type: {
            type: String,
            default: 'date'
        },
        // large、default、small
        size: {
            type: String,
            default: 'default'
        },
        value: {
            type: String
        }
    },
    // 这里用来定义v-model的值
    model: {
        prop: "value",
        event: "change",
    },
    render(h) {
        return h(
            'a-' + this.type + '-picker',
            {
                class: [
                    'my-DatePicker',
                ],
                props: {
                    placeholder: "请选择",
                    size: this.size,
                    format: 'YYYY年M月D日',
                    value: this.value ? moment(this.value) : undefined,
                },
                on: {
                    // 更新数据
                    change: (v) => {
                        this.$emit("change", v ? v.format('YYYY-MM-DD HH:mm:ss'): undefined);
                    },
                }
            }
        )
    }
}
</script>

<style lang="less" scoped>
.my-DatePicker{
    width: 100%;
}
</style>

<!-- <a-month-picker placeholder="Select month" @change="onChange" /> -->