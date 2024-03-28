<template>
    <div>
        <ant-layout></ant-layout>

        <button @click="onEdit">添加数据</button>
        <AntTable2 :columns="columns" :listdata="listData">
            <a slot="action" @click="onSe(item)" slot-scope="{item,index}">
                查看{{ index }}
            </a>
        </AntTable2>
    </div>
</template>

<script>
import AntTable2 from './ant-table/table.vue'
import {columns, listData } from './ant-table/columns'
export default {
    components: {
        AntTable2,
    },
    data() {
        return {
            columns,
            listData
        }
    },
    methods: {
        onEdit() {
            this.listData.push(this.listData[0]);
        },
        onSe(e) {
            alert(JSON.stringify(e));
        }
    }
}
</script>

<style lang="less" scoped>
ul{
    .c + .r{
        background: red;
    }
}
ul .r:not(.r ~ .r) {
    color: greenyellow;
}

.l:not(.a :has(+.l)) {
    background: gray;
}
</style>