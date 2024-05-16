<template>
    <div class="my-table-com">
        <table border="1">
            <thead>
                <table-head />
            </thead>
            <transition-group tag="tbody" name="t">
                <tr v-for="(e, i) in listdata" :key="e[rowKey]">
                    <cols-com tag="td" :cols="columns" :item="e" :index="i" :slots="$scopedSlots"/>
                </tr>
            </transition-group>
        </table>
    </div>
</template>

<script>
import { headRender } from './thead'
import { colRender } from './cols'
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
        }
    },
    components: {
        'table-head': {
            functional: true,
            render: headRender,
        },
        'cols-com': {
            functional: true,
            render: colRender,
        },
    },
}
</script>

<style lang="less" scoped>
    @import url('./table.less');
</style>
