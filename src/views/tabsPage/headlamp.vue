<template>
    <div class="tab_page_headlamp">
        <div class="content" ref="dragBar">
            <div class="img_content" ref="dragTarget">
                <img src="../../assets/images/照明灯.svg" alt="" >
                <on-off-lamp v-for="(e, i) in lampList" :key="i" :cfig="e" :style="{left: e.left, top: e.top}" @callback="bindOnOff(e)" />
            </div>
        </div>

        <div class="footer_content">
            <div>
                <my-btn text="照明总开" type="deongaree"/>
                <my-btn text="照明总关" type="alarm"/>
            </div>
            <div>
                <my-btn text="区域1总关" type="success"/>
                <my-btn text="区域1总关" type="warning"/>
            </div>
            <div>
                <my-btn text="区域2总关" type="success"/>
                <my-btn text="区域2总关" type="warning"/>
            </div>
            <div>
                <my-btn text="区域3总关" type="success"/>
                <my-btn text="区域3总关" type="warning"/>
            </div>
        </div>
    </div>
</template>

<script>
import OnOffLamp from '@/components/list/on_off_lamp.vue'
import MyBtn from '@/components/svg/my-btn.vue'
export default {
    components: {
        OnOffLamp,
        MyBtn,
    },
    computed: {
        lampList() {
            return [
                {title: '工具室', type: 'column', left: '493px', top: '110px'},
                {title: '测试室', type: 'column', left: '597px', top: '110px'},
                {title: '扩增室', type: 'column', left: '676px', top: '110px'},
                {title: '前加样室', type: 'column', left: '731px', top: '102px'},
                {title: '提取室', type: 'column', left: '865px', top: '159px'},
                {title: '洗消室', type: 'column', left: '979px', top: '221px'},
                {title: '耗材室', type: 'column', left: '1115px', top: '210px'},
                {title: '更衣室', type: 'column', left: '1242px', top: '116px'},
                {title: '扩增室', type: 'column', left: '309px', top: '547px'},
                {title: '前加样室', type: 'column', left: '430px', top: '554px'},
                {title: '工作站', type: 'column', left: '566px', top: '573px'},
                {title: '案件前处理室', type: 'column', left: '1043px', top: '460px'},
                {title: '缓冲间', type: 'column', left: '600px', top: '265px'},
                {title: '试剂配置室', left: '961px', top: '90px'},
                {title: 'UPS5室', left: '185px', top: '335px'},
                {title: '过道', left: '775px', top: '351px'},
                {title: '测序室', left: '142px', top: '435px'},
                {title: '案件提取室', left: '532px', top: '425px'},
                {title: '常规提取室', left: '658px', top: '610px'},
                {title: '腐败前处理', left: '833px', top: '610px'},
                {title: '微量提取室', left: '720px', top: '452px'},
            ]
        },
    },
    mounted() {
    },
    methods: {
        bindOnOff(e) {
            console.log(e,'jjjjjjjjj')
        },
    }
}
</script>

<style lang="less" scoped>
.tab_page_headlamp{
    margin: 0 20px;
    background-size: 100% 100%;
    > .content{
        height: calc(100% - 88px);
        border: 2px solid @border-color-base;
        border-radius: 20px;
        overflow: hidden;
    }
}

.img_content{
    position: relative;
    left:0;
    top: 0;
    width: 1877px;
    height: 730px;
    user-select: none;
	cursor: move;
    > img{
        display: block;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
}

.on_off_lamp{
    position: absolute;
    left: 0;
    top: 0;
}

.footer_content{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    margin: 8px 6% 0 6%;
    > div{
        /deep/ .my_btn_1{
            &:nth-child(1) {
                margin-right: 20px;
            }
        }
    }
}
</style>