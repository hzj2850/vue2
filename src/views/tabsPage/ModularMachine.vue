<template>
    <my-list :columns="head" :data="list" @click="bindItem">
      <template slot="order" slot-scope="item,index">
        {{ index }}
      </template>
    </my-list>
</template>

<script>
import MyList from '../../components/my-list.vue'
export default {
  components: { MyList },
  data() {
    return {
      head: [
          {slot: 'order', title: '序号', style: {'max-width': '100px'}},
          {slot: 'name', title: '姓名'},
          {slot: 'age', title: '年龄'},
          {slot: 'sex', title: '性别'},
      ],
      list: [
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
        { name: '李四', age: 35, sex: '男' },
      ]
    }
  },
  methods: {
    bindItem(item, index) {
      console.log(index, JSON.stringify(item));
    }
  }
}
</script>

<style lang="less" scoped>
.my-list{
  /deep/ .my-list-header{
    line-height: 50px;
    position: sticky;
    top: 0;
    color: #333;
    > .col{
      background: #ccc;
    }
  }
  /deep/ .my-list-body{
    line-height: 50px;
  }
}
</style>