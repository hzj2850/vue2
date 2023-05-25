<template>
    <div class="tab_temperature" ref="dragBar">
        <div class="content" ref="dragTarget">
            <img src="../../assets/images/照明灯.svg" alt="">
            <div class="tip_content" v-for="(e, i) in lampList" :key="i" :style="{'left': e.left || 'auto', top: e.top || 'tuto', bottom: e.bottom || 'auto'}">
               <div :class="{'delta_b': !e.top}" v-if="e.tem || e.per || e.pa">
                    <p v-if="e.tem">{{ e.tem }} ℃</p>
                    <p class="per-color" v-if="e.per">{{ e.per }} %</p>
                    <p class="pa-color" v-if="e.pa">{{ e.pa }} Pa</p>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        lampList() {
            let list = [
                {title: '工具室',       left: '480px',   bottom: '600px',  tem: '17.6', per: 47.8, pa: '00.0'},
                {title: '测试室',       left: '583px',   bottom: '600px',  tem: '17.6', per: 47.8, pa: '00.0'},
                {title: '扩增室',       left: '665px',   bottom: '600px',  tem: '17.6', per: 47.8, pa: '00.0'},
                {title: '前加样室',     left: '718px',   top: '265px',  tem: '17.6', per: 47.8, pa: '00.0'},
                {title: '提取室',       left: '850px',   bottom: '550px',  tem: '17.6', per: 47.8, pa: '00.0'},
                {title: '试剂配置室',   left: '965px',   bottom: '640px',  tem: '17.6', per: 47.8, pa: '00.0'},
                {title: '洗消室',       left: '965px',   bottom: '485px',  tem: '17.6', per: 47.8, pa: '00.0'},
                {title: '耗材室',       left: '1103px',  bottom: '496px',  tem: '17.6', per: 47.8, pa: '00.0'},
                {title: '更衣室',       left: '1230px',  bottom: '595px',  tem: '17.6', per: 47.8, pa: '00.0'},
                {title: '缓冲间',       left: '157px',   bottom: '378px',  tem: '17.6', per: 47.8, pa: '00.0'},
                {title: '测序室',       left: '80px',    bottom: '325px',  tem: '17.6', per: 47.8, pa: '00.0'},
                {title: '扩增室',       left: '295px',   bottom: '270px',  tem: '17.6', per: 47.8, pa: '00.0'},
                {title: '前加样室',     left: '415px',   top: '590px',     tem: '17.6', per: 47.8, pa: '00.0'},
                {title: '工作站',       left: '554px',   bottom: '245px',  tem: '17.6', per: 47.8, pa: '00.0'},
                {title: '微量提取室',   left: '640px',   bottom: '310px',  tem: '17.6', per: 47.8, pa: '00.0'},
                {title: '常规提取室',   left: '663px',   bottom: '180px',  tem: '17.6', per: 47.8, pa: '00.0'},
                {title: '腐败前提取室', left: '836px',   bottom: '180px',  tem: '17.6', per: 47.8, pa: '00.0'},
                {title: '案件前处理室', left: '1031px',  bottom: '325px',  tem: '17.6', per: 47.8, pa: '00.0'},
                {title: '检材暂存室',   left: '1268px',  bottom: '308px',  tem: '17.6', per: 47.8, pa: '00.0'},
            ]
            return list;
        },
    },
    mounted() {
    },
}
</script>

<style lang="less" scoped>
.tab_temperature{
    margin: 0 20px;
    overflow: hidden;
    border: 2px solid @border-color-base;
    border-radius: 20px;
    > .content{
        width: 1877px;
        height: 790px;
        position: relative;
        left: 0;
        top: 0;
        user-select: none;
        > img{
            display: block;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
    }
}
.tip_content{
    position: absolute;
    white-space: nowrap;
    color: @text-color;
    font-family: Microsoft YaHei;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    pointer-events: none;
    > div{
        background: rgb(0, 8, 59);
        border: 1px solid @text-color;
        border-radius: 2px;
        padding: 5px 10px;
        position: relative;
        &::after, &::before{
            content: " ";
            box-sizing: border;
            position: absolute;
            top: 0;
            left: 50%;
            width: 0;
            height: 0;
            border: 5px solid transparent;
            border-bottom-color: @text-color;
            transform: translate(-50%, -100%);
            transform-origin: center;
        }
        &::after{
            top: 1px;
            border-bottom-color: rgb(0, 8, 59);
        }
    }
    .delta_b{
        &::before,&::after{
            top: auto;
            bottom: 0;
            border-color: transparent;
            border-top-color: @text-color;
            transform: translate(-50%, 100%);
        }
        &::after{
            border-top-color: rgb(0, 8, 59);
            bottom: 1px;
        }
    }
}

.per-color {
    color: @warning-color;
}
.pa-color{
    color: rgb(248, 106, 2);
}
</style>