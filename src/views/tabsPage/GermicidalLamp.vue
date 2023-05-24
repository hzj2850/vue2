<template>
    <div class="GermicidalLamp">
        <div class="content" ref="dragBar">
            <div class="drag_content" ref="dragTarget">
                <img src="../../assets/images/照明灯.svg" alt="">
                <i :class="['my-rect-icon', {'my-rect-icon-on': e.on}]" v-for="(e,i) in lampList" :key="i" :style="{'left': e.left, 'top': e.top}"/>
            </div>
        </div>

        <div class="footer">
            <div class="l">
                <a-icon type="check-circle" theme="filled" />
                房间无人可正常操作
            </div>
            <div class="c">
                <div class="item" v-for="e in footBtnList" :key="e.title">
                    <div class="title">{{ e.title }}</div>
                    <div class="btn">
                        <span class="l_text">手动</span>
                        <my-btn :type="e.is_on ? 'deongaree' : 'default'" @callback="bindOnOff(e)">
                            <span class="btn_text" :style="{'color': e.is_on? '#fff' : '#bbb'}">开</span>
                            <span class="btn_text" :style="{'color': !e.is_on? '#fff' : '#bbb'}">/关</span>
                        </my-btn>
                    </div>
                </div>
            </div>
            <div class="r">
                <a-icon type="warning" theme="filled" />
                有人工作时，严禁开启杀菌灯！
            </div>
        </div>
    </div>
</template>

<script>
import MyBtn from '@/components/svg/my-btn.vue'
import DragScale from '@/utils/drag-move.js'
export default {
    components: {
        MyBtn,
    },
    data() {
        return {
            
        }
    },
    computed: {
        // 底部开关按钮
        footBtnList() {
            return [
                {title: '上半部分区域—— 杀菌灯1', is_on: false},
                {title: '参观走道-杀菌灯2', is_on: true},
                {title: '下半部分区域-杀菌灯1', is_on: true},
            ]
        },
        lampList() {
            return [
                {title: '工具室',  left: '480px', top: '145px'},
                {title: '测试室',  left: '565px', top: '145px'},
                {title: '扩增室',  left: '650px', top: '145px', on: true},
                {title: '前加样室',left: '727px', top: '135px'},
                {title: '提取室',  left: '850px', top: '195px'},
                {title: '试剂配置室', left: '970px', top: '100px'},
                {title: '洗消室',  left: '965px', top: '250px'},
                {title: '缓冲间',  left: '637px', top: '265px'},
                {title: '耗材室',  left: '1105px', top: '245px'},
                {title: '更衣室',  left: '1230px', top: '150px'},
                {title: 'UPS5室', left: '185px', top: '343px'},
                {title: '过道', left: '775px', top: '360px'},
                {title: '测序室', left: '85px', top: '470px'},
                {title: '扩增室', left: '297px', top: '550px', on: true},
                {title: '前加样室', left: '418px', top: '557px'},
                {title: '工作站', left: '557px', top: '575px'},
                {title: '微量提取室', left: '640px', top: '482px'},
                {title: '常规提取室', left: '665px', top: '614px', on: true},
                {title: '腐败前提取室', left: '840px', top: '614px', on: true},
                {title: '案件前处理室', left: '1031px', top: '465px'},
                {title: '检材暂存室', left: '1270px', top: '545px'},
            ]
        },
    },
    mounted() {
        let drag = new DragScale(this.$refs.dragBar, this.$refs.dragTarget);
        drag.drag();
    },
    methods: {
        bindOnOff(e) {
            console.log(e)
        },
    }
}
</script>

<style lang="less" scoped>
.GermicidalLamp{
    margin: 0 20px;
}
.content{
    height: calc(100% - 88px);
    border: 2px solid @border-color-base;
    border-radius: 20px;
    overflow: hidden;
}

.drag_content{
    width: 1877px;
    height: 730px;
    position: relative;
    user-select: none;
    > img {
        display: block;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
}

.my-rect-icon{
    position: absolute;
    left:0;
    top: 0;
    box-shadow: 0 1px 4px rgba(255, 255, 255, 0.4);
    pointer-events: none;
}

.footer{
    font-family: Noto Sans SC;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    margin-top: 8px;
    > .l, .r{
        border-radius: 4px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1em;
        .anticon {
            margin-right: 0.6em;
        }
    }
    > .l{
        color: @success-color;
        border: 1px solid @success-color;
        
    }
    > .r{
        color: @alarm-color;
        border: 1px solid @alarm-color;
    }

    > .c{
        color: #fff;
        font-size: 15px;
        display: flex;
        justify-content: space-between;
        width: 50%;
        > .item{
            width: 230px;
        }
        .title{
            background: @alarm-bg;
            line-height: 22px;
            text-align: center;
            width: 100%;
        }
        .btn{
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid @alarm-bg;
            height: 50px;
            > .l_text{
                white-space: nowrap;
                padding-right: 13%;
            }
        }
        /deep/ .my_btn_1 {
            width: 115px;
            height: 40px;
            margin: 0 !important;
            > span{font-size: 14px;}
        }
        .btn_text{
            display: inline-block;
        }
    }
}
</style>