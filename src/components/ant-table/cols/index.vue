<script>
import { colMap } from './cols.js'
export default {
    functional: true,
    render: (h, f) => colMap(h, f.props)
}
</script>

<style lang="less" scoped>
.td{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
}
</style>