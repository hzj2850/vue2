<template>
  <div class="my-table" @mouseenter="setMove">
    <a-table
      :columns="getcols(columns)"
      :data-source="dataSource"
      :scroll="{ x: 1200, y: 300 }"
      :bordered="true"
      :pagination="false"
      :row-selection="rowSelection"
      :row-key="rowKey"
      :custom-row="customRow"
    >
      <!-- 序号 -->
      <template #order="text, record, index">
        <a-checkbox
          class="checkbox"
          v-if="orderCheck"
          :checked="getCheck(record)"
          @change="onCheck(record, text)"
          >{{ index + 1 }}</a-checkbox
        >
        <span class="text" v-else>{{ index + 1 }}</span>
      </template>
      <!-- 文本套一层壳 -->
      <template #text="text">
        <span class="text">{{ text }}</span>
      </template>
      <!-- 省略号 -->
      <template #ellipsis="text">
        <a-tooltip class="ellipsis" placement="top" :title="text">
          {{ text }}
        </a-tooltip>
      </template>
      <!-- 插槽 -->
      <template v-for="k in Object.keys($scopedSlots)" :slot="k">
        <slot :name="k"></slot>
      </template>
    </a-table>
  </div>
</template>

<script>
import { setMove, getcols, onCheck, getCheck, getdif } from "./move";
export default {
  props: {
    columns: {
      type: Array,
      default: [],
    },
    dataSource: {
      type: Array,
      default: [],
    },
    rowSelection: {
      type: Object,
      default: () => ({}),
    },
    rowKey: {
      type: Function,
      default: (e) => e.id || e.key,
    },
    customRow: {
      type: Function,
    },
    orderCheck: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getcols,
    onCheck,
    getCheck,
    setMove,
    getdif,
  },
};
</script>

<style lang="less" scoped>
// 滚动条
.tableScrobar() {
  scrollbar-width: none; // 兼容火狐
  -ms-overflow-style: none; // 兼容IE10+
  -webkit-overflow-scrolling: touch; // 解决 ios 上滑动不流畅
  &::-webkit-scrollbar {
    // 隐藏滚动条，兼容 chrome 和 safari 浏览器
    display: none;
  }
}

.my-table {
  height: 70vh;
}

// 表格样式
.ant-table-wrapper {
  height: 100%;
  /deep/ .ant-spin-nested-loading {
    height: inherit;
    > .ant-spin-container {
      height: inherit;
      > .ant-table {
        height: inherit;
        > .ant-table-content {
          height: inherit;
          // 表格头部去掉滚动条
          .ant-table-header {
            padding: 0 !important;
            margin: 0 !important;
            .tableScrobar();
            .ant-table-header-column {
              cursor: auto;
            }
          }
          > .ant-table-scroll {
            height: inherit;
            display: flex;
            flex-direction: column;
            > .ant-table-body {
              max-height: none !important;
              .tableScrobar();
              flex: 1;
            }
          }
          > .ant-table-fixed-right,
          > .ant-table-fixed-left {
            height: inherit;
            display: flex;
            flex-direction: column;
            > .ant-table-body-outer {
              padding: 0 !important;
              margin: 0 !important;
              flex: 1;
              overflow: hidden;
              > .ant-table-body-inner {
                max-height: 100% !important;
                .tableScrobar();
              }
            }
          }
        }
      }
    }
  }
  /deep/ .ant-table-content {
    table {
      border-color: #e8e8e8; // 边框颜色
      th {
        background: #fafafa; // 头部背景色
      }
      td,
      th {
        padding: 0 0.5em;
        height: 50px;
        border-color: inherit !important;
      }
    }
  }
}

// 文本套一层壳
.text {
  cursor: auto;
  &:hover {
    color: #000;
  }
}

// 省略号
.ellipsis {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: auto;
  &:hover {
    color: #000;
  }
}

// 多选框
.checkbox {
  /deep/ .ant-checkbox + span {
    min-width: 1.6em;
    display: inline-block;
    padding: 0;
    text-indent: 4px;
  }
}
</style>
