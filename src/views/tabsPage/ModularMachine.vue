<template>
    <div>
      <a-menu mode="inline" :open-keys="openKeys" style="width: 256px" @openChange="onOpenChange">
        <a-menu-item key="1">
            <a-icon type="pie-chart" />
            <span>Option 1</span>
        </a-menu-item>
        
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
          <a-menu-item key="1">
            Option 1
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
          <a-menu-item key="5">
            Option 5
          </a-menu-item>

            <a-sub-menu key="sub3" title="Submenu">
                <a-menu-item key="7">
                Option 7
                </a-menu-item>
                <a-menu-item key="8">
                Option 8
                </a-menu-item>
            </a-sub-menu>

        </a-sub-menu>
      </a-menu>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
        openKeys: ['sub1'],
      };
    },
    methods: {
      onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.openKeys = openKeys;
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : [];
        }
      },
    },
  };
  </script>
  