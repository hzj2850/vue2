<template>
    <div>
      <a-button @click="bindAdd()">添加数据</a-button>
      <my-list :columns="head" :data="list" transition="v" @click="bindItem">
        <template slot="order" slot-scope="item,index">
          {{ index }}
        </template>
        <template slot="sex" slot-scope="item, index">
          {{ item.sex }}
          <span @click.stop="bindAddItem(index)">添加</span>
        </template>
      </my-list>
    </div>
</template>

<script>
import MyList from '../../components/my-list3.vue'
export default {
  components: { MyList },
  data() {
    return {
      head: [
          {slot: 'order', title: '序号', style: {'max-width': '100px', 'min-width':'100px'}},
          {slot: 'name', title: '姓名', style: {'max-width': '1000px', 'min-width':'1000px'}},
          {slot: 'age', title: '年龄', style: {'max-width': '1000px', 'min-width':'1000px'}},
          {slot: 'sex', title: '性别', style: {'max-width': '1000px', 'min-width':'1000px'}},
      ],
      list: [
        {id: 1, name: '李四', age: 35, sex: '男' },
        {id: 2, name: '性别', age: 35, sex: '男' },
        {id: 3, name: '李四', age: 35, sex: '男' },
        {id: 4, name: '李四', age: 35, sex: '男' },
        {id: 5, name: '李四', age: 35, sex: '男' },
        {id: 6, name: '李四', age: 35, sex: '男' },
        {id: 7, name: '李四', age: 35, sex: '男' },
        {id: 8, name: '李四', age: 35, sex: '男' },
        {id: 9, name: '李四', age: 35, sex: '男' },
      ]
    }
  },
  methods: {
    bindItem(item, index) {
      console.log(index, JSON.stringify(item));
      index > 0 && this.list.splice(index - 1, 1);
    },
    bindAdd() {
      this.list.push({id: new Date().getTime(), name: '小红', age: 9, sex: '女' })
    },
    bindAddItem(index) {
      this.list.splice(index, 0, {id: new Date().getTime(), name: '张三', age: 23, sex: '男' });
    }
  }
}
</script>
