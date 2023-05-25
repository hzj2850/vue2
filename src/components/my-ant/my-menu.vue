<!-- <template>
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
</template> -->

<script>
export default {
  render() {


    function filterData(arr) {
        let list = []
        for(let item of arr) {
          if(item.children) {
            list.push(<li>
              { item.title }
              {filterData(item.children)}
            </li>)
          } else {
            list.push(<li>{ item.title }</li>)
          }
        }
        return <ul>{ list }</ul>
    }

    const attrs = {
      mode: "inline",
      ...this.$attrs
    }
    return <div>
      {filterData(this.list)}
    </div>
  },
  data() {
    return {
      collapsed: false,
      list: [
        {
          key: '3',
          title: '第一节1'
        },
        {
          key: "1",
          title: "第一节2",
          children: [{ key: "1.1", title: "1-1" }],
        },
        {
          key: "2",
          title: "第一节3",
          children: [
            {
              key: "2.1",
              title: "2-1",
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
};
</script>
