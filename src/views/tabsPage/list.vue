<template>
    <div>
        <TableList :columns="head_cfig" :data="list_data">
            <template slot="name4-head">
                头部
                <span>123</span>
            </template>
            <template slot="name4">
                555555
            </template>
        </TableList>
    </div>
</template>

<script>
import TableList from '@/components/TableList.vue'
export default {
    components: { TableList },
    data() {
        return {
            list_data: [
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
                {name0: 'aaaaaa', name1: 'bbbbbb', name2: 'C Name', name3: 'd Name'},
            ]
        }
    },
    computed: {
        head_cfig() {
            return [
                {slot: 'name0', title: '111', maxWidth: '100px', minWidth: '100px'},
                {slot: 'name1', title: '222', maxWidth: '600px'},
                {slot: 'name2', title: '333', maxWidth: '400px'},
                {slot: 'name3', title: '444', maxWidth: '1100px'},
                {slot: 'name4', title: '555', maxWidth: '300px'},
            ]
        }
    }
}
</script>