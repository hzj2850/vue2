<template>
    <div>
        <ant-layout></ant-layout>

        <button @click="onEdit">添加数据</button>
        <AntTable2 :columns="columns" :listdata="listData" row-key="name">
            <a slot="action" @click="onSe(item)" slot-scope="{item,index}">
                查看{{ index }}
            </a>
            <template #expand="e">
                <p>下拉展开内容</p>
                {{ e }}
            </template>
        </AntTable2>
    </div>
</template>

<script>
import AntTable2 from '@/components/ant-table/cols/index.vue'
import AntLayout from '@/components/ant-layout/index.vue'
import {columns, listData } from './columns'
export default {
    components: {
        AntTable2,
        AntLayout
    },
    data() {
        return {
            columns,
            listData
        }
    },
    methods: {
        onEdit() {
            const obj = {...this.listData[0]};
            obj.name += 1;
            this.listData.push(obj);
        },
        onSe(e) {
            alert(JSON.stringify(e));
        }
    }
}
</script>
