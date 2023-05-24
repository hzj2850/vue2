<template>
    <div>
        <div class="title">实时报警显示</div>
        <div class="list_content hide-scroll-bar" v-scroll="{scroll: c => getList(c), distance: 100}">
            <ul class="list_item list_item_header">
                <li v-for="e in headList" :key="e.title" :style="{'max-width': e.w}">
                    {{ e.title }}
                </li>
            </ul>
            <ul class="list_item" v-for="(item, index) in 100" :key="index">
                <li v-for="e in headList" :key="e.title" :style="{'max-width': e.w}">
                    <template v-if="e.title == '序号'">
                        {{ index + 1 }}
                    </template>
                    <template v-if="e.title == '报警日期'">
                        报警日期
                    </template>
                    <template v-if="e.title == '报警时间'">
                        报警时间
                    </template>
                    <template v-if="e.title == '变量名'">
                        变量名
                    </template>
                    <template v-if="e.title == '报警值/旧值'">
                        报警值/旧值
                    </template>
                    <template v-if="e.title == '事件类型'">
                        事件类型
                    </template>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import MyScrollBar from '@/utils/MyScrollBar'
export default {
    data() {
        return {
            headList: [
                {title: '序号', w: '120px'},
                {title: '报警日期'},
                {title: '报警时间'},
                {title: '变量名'},
                {title: '报警值/旧值'},
                {title: '事件类型'}
            ],
            list: [],
        }
    },
    mounted() {
        const MyBar = new MyScrollBar({
            ele: document.querySelector('.list_content')
        });
        console.log(MyBar,'kkkkkkkkk')

    },
    methods: {
        getList(obj) {
            // 到底了
            if(obj.init || obj.end) {
                this.$message.warning('触发底部回调事件');
            }
        },
    },
}
</script>

<style lang="less" scoped>
.title {
    color: @alarm-color;
    font-family: Microsoft YaHei;
    font-size: 30px;
    font-weight: 700;
    line-height: 60px;
    padding-bottom: 10px;
    text-align: center;
}

.list_content{
    height: calc(100% - 80px);
    overflow-y: auto;

}


.list_item_header{
    position: sticky;
    left: 0;
    top: 0;
    background: rgb(0, 31, 138) !important;
}

.list_item {
    font-size: 16px;
    min-height: 50px;
    line-height: 50px;
    display: flex;
    align-items: center;
    text-align: center;
    width: 200%;
    &:nth-child(2n + 1) {
        background: rgb(0, 22, 98);
    }
    > li{
        flex: 1;
    }
}

</style>