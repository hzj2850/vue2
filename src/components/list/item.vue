<template>
    <div class="content">
        <div class="title_rectangle">
            <div :style="{'border-color': cfig.titleColor}"></div>
        </div>
        <div class="title_text" :style="{'color': cfig.titleColor}">
            {{ cfig.title || '标题' }}
        </div>
        <div class="list_content">
            <div :class="['list_item', {'has_on_off': e.on_off, 'demarcation': e.demarcation}]" v-for="(e, i) in (cfig.list || [])" :key="i">
                <div class="left">
                    <span>{{ e.title }}</span>
                    <span :class="['iconfont', e.titleIcon, {'is_bright': e.f}]" v-if="e.titleIcon" />
                </div>
                <div class="right" :style="{'color': e.color}">
                    <span class="number" v-if="e.number">{{ e.number }}</span>
                    <span class="unit" v-if="e.unit">{{ e.unit }}</span>
                    <span :class="['on-off', {'is_on': e.f}]" v-if="e.on_off == true" @click="bindOnOff(e)"/>
                    <span :class="['iconfont', e.on_off]" v-if="e.on_off && typeof e.on_off == 'string'" />
                </div>
            </div>
        </div>
        <slot/>
    </div>
</template>

<script>
export default {
    props: {
        cfig: {
            type: Object,
            default: () => {
                return {
                    titleColor: 'rgb(0, 235, 44)',
                    title: '标题',
                    list: [
                        {
                            title: '左边标题',
                            titleIcon: 'icon-a-liebiao-3kongtiaoyunhang', // 左边图标
                            number: 16.5, // 右边度数，字体比较大
                            unit: '故障', // 右边单位 字体和title一致
                            color: 'red', // 右边字体颜色
                            on_off: 'icon-a-liebiao-4guzhang', // 列表右边 true 是开关， string 是图标
                            demarcation: true, // 照明灯的分割
                            key: '', // 开关字段名称（根据后端数据命名）
                            f: true, // 开关是否打开 keyObj[key]
                        },
                    ]
                }
            }
        },
    },
    methods: {
        async bindOnOff(e) {
            const qx = await this.$limits();
            qx && this.$emit('collback', e);
        },
    },
}
</script>

<style lang="less" scoped>
.content{
    width: 100%;
    // height: 231px;
    background: rgb(5, 13, 75);
    box-shadow: inset 0px 0.86px 17.28px rgba(18, 142, 232, 0.35);
    border-radius: 20.74px;
    border: 2px solid @border-color-base;
}

.title_rectangle{
    /* 矩形 */
    width: 70px;
    height: 9px;
    box-sizing: border-box;
    border: 2px solid @border-color-base;
    border-radius: 0px 0px 10px 10px;
    margin: -2px auto 0 auto;
    position: relative;
    > div{
        width: 60px;
        height: 6px;
        box-sizing: border-box;
        background: linear-gradient(0.00deg, rgba(54,98,164,1) 50%,rgba(10,16,31,1) 0%);
        border: 2.5px solid rgb(2, 197, 248);
        border-radius: 0px 0px 9.5px 9.5px;
        margin: -2px auto 0 auto;
    }
    &::before,&::after{
        content: '';
        display: block;
        width: 3px;
        height: 2px;
        background: rgb(5, 13, 75);
        position: absolute;
        top: -2px;
    }
    &::before{
        left: 0;
    }
    &::after{
        right: 0;
    }
}

.title_text{
    color: rgb(2, 197, 248);
    font-size: 17px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0px;
    text-align: center;
    border-bottom: 1px solid rgb(67, 133, 171);
}

.list_content{
    padding: 0 10px 15px 10px;
}

.list_item{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 14px;
    height: 1.53em;
    color: rgb(2, 197, 248);
    margin-top: 15px;
    > .right{
        display: flex;
        align-items: baseline;
        .iconfont{
            margin-right: 14px;
            transition: all ease 300ms;
        }
    }
    .number{
        font-size: 1.53em;
    }
    .unit, .iconfont{
        margin-left: 5px;
    }
    .iconfont{
        color: @disabled-color;
    }
}
.has_on_off{
    align-items: flex-end;
    margin-top: 4.4px;

    > .right{
        align-items: center;
        .on-off{
            margin-left: 6px;
        }
    }
}
.demarcation{
    margin-top: 15px;
}

.is_bright{
    color: @warning-color !important;
}
</style>