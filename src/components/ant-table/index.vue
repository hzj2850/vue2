<template>
    <transition-group class="ant-table" :appear="false" tag="div" name="over">
        <div class="tr" v-for="(e, i) in listdata" :key="e.key">
            <cols :columns="columns" :item="e" :index="i" :slots="$scopedSlots"/>
        </div>
    </transition-group>
</template>

<script>
import cols from './cols/index.vue'
import { columns, listdata } from './columns'
export default {
    components: { cols },
    props: {
        columns: {
            type: Object,
            default: () => columns
        },
        listdata: {
            type: Array,
            default: () => listdata
        },
    },
}
</script>

<style lang="less" scoped>

.tr{
    display: flex;
    border: 1px solid blueviolet;
    min-height: 40px;
    &:hover{
        background: rgba(149, 199, 247, 0.1);
    }
}


.over-enter-to{
    height: 40px !important;
}
.over-leave-to {
    height: 0 !important;
}
.over-enter-active, .over-leave-active {
    overflow: hidden;
    transition: all 300ms linear;
    height: 0;
}
</style>