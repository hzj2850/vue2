<template>
    <div>
      <a-button @click="bindAdd()">添加数据</a-button>
      <my-list :columns="head" :data="list" transition="v" :bar="true" @click="bindItem">
        <template slot="order-head">
          序号序号
        </template>
        <template slot="order" slot-scope="item">
          {{ item.id }}
        </template>
        <template slot="sex" slot-scope="item, index">
          {{ item.sex }}
          <span @click.stop="bindAddItem(index + 1)">添加</span>
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
          {slot: 'name', title: '姓名', style: {'max-width': '400px', 'min-width':'400px'}},
          {slot: 'age', title: '年龄', style: {'max-width': '500px', 'min-width':'500px'}},
          {slot: 'name', title: '姓名', style: {'max-width': '300px', 'min-width':'300px'}},
          {slot: 'age', title: '年龄', style: {'max-width': '150px', 'min-width':'150px'}},
          {slot: 'sex', title: '性别', style: {'max-width': '200px', 'min-width':'200px'}},
          {slot: 'name', title: '姓名', style: {'max-width': '300px', 'min-width':'300px'}},
          {slot: 'age', title: '年龄', style: {'max-width': '150px', 'min-width':'150px'}},
          {slot: 'sex', title: '性别', style: {'max-width': '200px', 'min-width':'200px'}},
          {slot: 'name', title: '姓名', style: {'max-width': '300px', 'min-width':'300px'}},
          {slot: 'age', title: '年龄', style: {'max-width': '150px', 'min-width':'150px'}},
          {slot: 'sex', title: '性别', style: {'max-width': '200px', 'min-width':'200px'}},
          {slot: 'name', title: '姓名', style: {'max-width': '300px', 'min-width':'300px'}},
          {slot: 'age', title: '年龄', style: {'max-width': '150px', 'min-width':'150px'}},
          {slot: 'sex', title: '性别', style: {'max-width': '200px', 'min-width':'200px'}},
      ],
      list: [
        {id: 1, name: '111111111', age: 35, sex: '男' },
        {id: 2, name: '2222222222', age: 35, sex: '男' },
        {id: 3, name: '3333333333333', age: 35, sex: '男' },
        {id: 4, name: '4444444444444', age: 35, sex: '男' },
        {id: 5, name: '55555555555555555', age: 35, sex: '男' },
        {id: 6, name: '66666666666666666', age: 35, sex: '男' },
        {id: 7, name: '7777777777777777', age: 35, sex: '男' },
        {id: 8, name: '888888888888888', age: 35, sex: '男' },
        {id: 9, name: '99999999999999', age: 35, sex: '男' },
      ]
    }
  },
  methods: {
    bindItem(item, index) {
      this.list.splice(index, 1);
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
