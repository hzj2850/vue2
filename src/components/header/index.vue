<template>
    <div class="com_head_index">
        <div class="com_head_title">{{ cfig.title }}</div>
        <div class="com_head_l">
            <div v-for="(e, i) in (cfig.list || [])" :key="i">
                <i class="iconfont icon-xiangyou" v-if="i != 0"/>
                <span>{{ e.title || '请去路由配置' }}</span>
            </div>
        </div>
        <div class="com_head_r">
            <div>
                用户：{{ (cfig.userInfo || {}).name || "***" }}
                &nbsp;&nbsp;
                {{ newTime ? moment(newTime).format('HH:mm:ss') : '' }}
                {{ newTime ? '&nbsp;' + moment(newTime).format('YYYY/M/D') : '' }}
            </div>
            <div class="r_icon" v-if="false">
                <i class="iconfont icon-a-dingbuyoushangjiaotubiao-1suoxiaoyemian1"/>
                <i class="iconfont icon-a-dingbuyoushangjiaotubiao-2suoxiaoyemian2"/>
                <i class="iconfont icon-a-dingbuyoushangjiaotubiao-3guanbi"/>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
let interval = null;
export default {
    props: {
        cfig: {
            type: Object,
            default: () => {
                return {
                    title: '标题',
                    list: [
                        {title: '绍兴市公安局刑侦支队'},
                        {title: '中央空调监控系统'},
                    ],
                    userInfo: {
                        name: '系统管理员',
                    },
                }
            }
        }
    },
    data() {
        return {
            newTime: null,
        }
    },
    mounted() {
        this.newTime = new Date();
        interval = setInterval(() => {
            this.newTime = new Date();
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(interval);
    },
    methods: {
        moment,
    }
}
</script>

<style lang="less" scoped>
.com_head_index{
    height: 100px;
    width: 100%;
    background-image: url(../../assets/img/bg-top@2x.png);
    background-size: 100% 100%;
    position: relative;
    padding: 0 20px;
    font-size: 18px;
    color: @text-color;
}
.com_head_title{
    position: absolute;
    width: 30%;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: @text-color;
    font-family: Microsoft YaHei;
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
}

.com_head_l, .com_head_r{
    display: flex;
    align-items: center;
    height: 45%;
}

.com_head_l{
    float: left;
    .iconfont{
        color: @success-color;
        padding: 0 10px;
        font-size: 18px;
    }
}

.com_head_r{
    float: right;
    width: 28.5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div{
        text-align: right;
        flex: 1;
        white-space: nowrap;
    }
}


.r_icon{
    .iconfont{
        font-size: 26px;
        margin-left: 10px;
        cursor: pointer;
        user-select: none;
        &:nth-child(1) {
            margin-left: 0;
        }
    }
}


</style>