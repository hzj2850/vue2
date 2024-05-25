<template>
    <div>
        <p>{{ openKeys }}</p>
        <button @click="onEdit">添加数据</button>
        <ant-table :columns="columns" :listdata="listData" :selectRowKeys="openKeys" row-key="name">
            <a slot="action" @click="onSe(item)" slot-scope="{item,index}">
                查看{{ index }}
            </a>
            <template #expand="e">
                <p>下拉展开内容</p>
                {{ e }}
            </template>
        </ant-table>
    </div>
</template>

<script>
import AntTable from '@/components/ant-table/cols/index.vue'
import {columns, listData } from './columns'
export default {
    components: {
        AntTable
    },
    data() {
        return {
            columns,
            listData,
            openKeys: [],
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
