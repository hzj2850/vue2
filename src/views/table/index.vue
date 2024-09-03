<template>
  <div class="page">
    <my-table
      ref="table"
      :columns="columns"
      :data-source="data"
      :rowSelection="rowSelection()"
      :customRow="customRow"
    >
      <a slot="action">action</a>
      <span slot="customTitle">
        序号
        <a-icon type="smile-o" />
      </span>
    </my-table>
  </div>
</template>

<script>
import myTable from "./ant-table/index.vue";
import { columns, data } from "./columns";
export default {
  components: {
    myTable,
  },
  data() {
    return {
      columns,
      data,
      selectedRowKeys: ["1"],
    };
  },
  methods: {
    rowSelection() {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: (a, b) => {
          this.selectedRowKeys = a;
          console.log(a, b);
        },
      };
    },
    customRow(record) {
      return {
        on: {
          click: () => {
            if (this.$refs.table.getdif()) return false;
            console.log(record);
          },
        },
      };
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  height: 100%;
  background: #fff;
  padding: 20px;
  overflow: hidden;
}
</style>