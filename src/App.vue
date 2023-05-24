<template>
  <a-config-provider :locale="zh_CN">
    <div id="app">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </div>
  </a-config-provider>
</template>

<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

export default {
  name: "app",
  data() {
    return {
      zh_CN,
    };
  },
  mounted() {},
  methods: {},
};
</script>
