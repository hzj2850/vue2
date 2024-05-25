<template>
    <div class="my-table-com">
        <table border="1">
            <thead>
                <table-head />
            </thead>
            <tbody-com />
        </table>
    </div>
</template>

<script>
import { headRender } from './thead'
import { tbodyRender } from './tbody'
import { format } from './tree'
export default {
    props: {
        columns: {
            type: Array,
            default: () => ([])
        },
        listdata: {
            type: Array,
            default: () => ([])
        },
        rowKey: {
            type: String,
            default: 'id'
        },
        colKey: {
            type: String,
            default: '',
        },
        expandRowKeys: {
            type: Array,
            default: () => ([])
        },
        selectRowKeys: {
            type: Array,
            default: () => ([])
        },
    },
    computed: {
        list() {
            return format(this.listdata, 'id', 'children');
        },
    },
    components: {
        'table-head': {
            functional: true,
            render: headRender,
        },
        'tbody-com': {
            functional: true,
            render: tbodyRender,
        },
    },
}
</script>

<style lang="less" scoped>
    @import url('./table.less');
</style>
