<template>
    <div :class="['tab_item', {'tab_active': tabId == cfig.id}]" @click="bindItem">
        <span :class="['iconfont', cfig.icon]" />
        <div>{{ cfig.title }}</div>
    </div>
</template>

<script>
export default {
    props: {
        cfig: {
            type: Object,
            default: () => {
                return {
                    id: 1,
                    title: '导航',
                    icon: '',
                }
            }
        },
        // 默认选择的id
        tabId: {
            type: String,
            default: ''
        },
    },
    methods: {
        bindItem() {
            this.$emit('bindTab', this.cfig);
        },
    }
}
</script>

<style lang="less" scoped>
.tab_item{
    width: 140px;
    height: 100px;
    background: rgb(3, 19, 75);
    border: 4px solid @border-color-base;
    box-shadow: inset 0px 0.86px 17.28px rgba(18, 142, 232, 0.35);
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    transition: all ease 300ms;
    > div{
        color: rgb(27, 122, 220);
        font-size: 20px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0px;
        text-align: center;
    }
    > .iconfont{
        color: rgb(27, 122, 220);
        font-size: 50px;
    }
    // &:hover {
    //     background: linear-gradient(180.00deg, rgba(0,19,66,0.5) 0%,rgba(0,76,197,1) 50%,rgba(0,19,66,0.5) 100%);
    //     border-color: rgb(2, 197, 248);
    //     div, .iconfont{
    //         color: rgb(2, 197, 248);
    //     }
    // }
}
.tab_active{
    background: linear-gradient(180.00deg, rgba(0,19,66,0.5) 0%,rgba(0,76,197,1) 50%,rgba(0,19,66,0.5) 100%);
    border-color: rgb(2, 197, 248);
    div, .iconfont{
        color: rgb(2, 197, 248);
    }
}
</style>