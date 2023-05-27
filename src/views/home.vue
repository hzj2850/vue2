<template>
    <div class="view_home">
        <!-- 头部标题-->
        <tab-header :cfig="headConfig" />

        <router-view class="tab_page_view" />

        <!-- 底部导航 -->
        <div class="tab_body">
            <TabItem class="tab-item" v-for="e in tabList" :key="e.title" :cfig="e" :tabId="tabId" @bindTab="bindTab"/>
        </div>
    </div>
</template>

<script>
import TabItem from '../components/list/tab_item.vue'
import TabHeader from '../components/header/index.vue'
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
        // 底部导航
        tabList() {
            return [
                {id: 'form', title: '表单校验', icon: 'icon-a-1xitongzhuye'},
                {id: 'DragScale', title: '缩放/拖拽', icon: 'icon-a-2zongkonghuamian'},
                {id: 'swiper', title: '轮播/图片', icon: 'icon-a-9canshushezhi'},
                {id: 'list', title: '滚动列表', icon: 'icon-a-3AHU01kongtiao'},
                {id: 'swiper', title: '轮播图', icon: 'icon-a-3AHU01kongtiao'},
                {id: 'ModularMachine', title: '模块机', icon: 'icon-a-5mokuaiji'},
                {id: 'Temperature', title: '温湿度压差', icon: 'icon-a-6wenshiduyacha'},
                {id: 'headlamp', title: '照明灯', icon: 'icon-a-7zhaomingdeng'},
                {id: 'GermicidalLamp', title: '杀菌灯', icon: 'icon-a-8shajundeng'},
                {id: 'AlarmRecord', title: '报警记录', icon: 'icon-a-10baojingjilu'},
                {id: 11, title: '数据查询', icon: 'icon-a-11shujuchaxun'},
                {id: 'UserLogin', title: '用户登录', icon: 'icon-a-12yonghudenglu'},
                {id: 13, title: '用户注销', icon: 'icon-a-13yonghuzhuxiao'},
            ]
        },
        // 底部已经选中的导航
        tabId() {
            return this.$route.name
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
                title: 'DNA实验室集中监控系统',
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
.view_home{
    // width: 1920px;
    // height: 1008px;
    width: 100%;
    min-height: 100vh;
    background: rgb(0, 8, 63);
    color: #fff;
}

.tab_page_view{
    height: calc(100vh - 230px);
    overflow-y: auto;
    // 隐藏滚动条
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
        width: 0;
    }
}

.tab_body{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px 0 20px;
    > .tab-item{
        margin-left: 5px;
        // width: calc((100% - 5px * 12) / 13 );
        flex: 1;
        &:nth-child(1) {
            margin-left: 0;
        }
    }
}
</style>