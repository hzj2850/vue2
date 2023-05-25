<template>
  <a-menu
    :default-selected-keys="['1']"
    :default-open-keys="['2']"
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
  >
    <template v-for="item in list">
      <a-menu-item v-if="!item.children" :key="item.key">
        <a-icon type="pie-chart" />
        <span>{{ item.title }}</span>
      </a-menu-item>
      <sub-menu v-else :key="item.key" :menu-info="item" />
    </template>
  </a-menu>
</template>

<script>
import SubMenu from "./SubMenu.vue";
export default {
  components: {
    "sub-menu": SubMenu,
  },
  data() {
    return {
      collapsed: false,
      list: [
        {
          key: "1",
          title: "Option 1",
          children: [{ key: "1.1", title: "1-2" }],
        },
        {
          key: "2",
          title: "Navigation 2",
          children: [
            {
              key: "2.1",
              title: "Navigation 3",
              children: [
                {
                  key: "2.1.1",
                  title: "Option 2.1.1",
                  children: [{ key: "3", title: "333333" }],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
