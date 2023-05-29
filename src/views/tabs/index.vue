<template>
    <div class="tabs-index-page">
        <!-- 头部标题-->
        <tab-header :cfig="headConfig" />

        <router-view class="router-view" />

        <!-- 底部导航 -->
        <div class="tab-list">
            <TabItem class="tab-item" v-for="e in tabList" :key="e.title" :cfig="e" :tabId="tabId" @bindTab="bindTab"/>
        </div>
    </div>
</template>

<script>
import TabItem from './com/tab_item.vue'
import TabHeader from './com/index-page-head.vue'
export default {
    components: {
        TabItem,
        TabHeader
    },
    data() {
        return {
        }
    },
    computed: {
        // 底部已经选中的导航
        tabId() {
            return this.$route.name
        },
        // 底部导航
        tabList() {
            const route = this.$router.options.routes.find(o => o.name === 'tabs') || {};
            const children = route.children || [];
            return children.map(e => {
                return {id: e.name, title: (e.meta || {}).title, icon: (e.meta || {}).icon}
            });
        },
        // 头部配置
        headConfig() {
            const matched = this.$route.matched || [];
            let list = [];
            for(const e of matched) {
                list.push(e.meta);
            }
            return {
                list,
                title: 'VUE2模板搭建',
                userInfo: {
                    name: '王二'
                }
            }
        },

    },
    mounted() {
        /* this.$userApi.getUserInfo({}, {loading: {start: true, text: '获取用户信息'}}).then(res => {
            if(res.code = 200) {
                
            }
        }) */
    },
    methods: {
        bindTab(e) {
            if(typeof e.id == 'number') return this.$message.warning( `【${e.title}】功能未开放`);
            // 登录
            if(e.id == 'UserLogin') return this.$router.push({ name: e.id });
            this.$router.replace({ name: e.id })
        },
    }
}
</script>

<style lang="less" scoped>
.tabs-index-page{
    min-height: 100vh;
    background: rgb(0, 8, 63);
    color: #fff;
}

.tab-list{
    display: flex;
    justify-content: center;
    margin-top: 15px;
    > .tab-item{
        margin-left: 20px;
        &:first-child{
            margin-left: 0;
        }
    }
}

.router-view{
    min-height: calc(100vh - 230px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

</style>