<template>
    <div :class="['on_off_lamp', this.cfig.type ? 'on_off_lamp_' + this.cfig.type : '']">
        <span class="iconfont icon-a-liebiao-1zhaomingdeng"></span>
        <div class="on-off" @click.stop="bindClick()"></div>
    </div>
</template>
<script>
export default {
    props: {
        cfig: {
            tpe: Object,
            default: () => {
                return {}
            }
        }
    },
    methods: {
        async bindClick() {
            const qx = await this.$limits();
            qx && this.$emit('callback', this.cfig);
        },
    },
}
</script>

<style lang="less" scoped>
.on_off_lamp{
    border: 1px solid @border-color-base;
    display: inline-block;
    padding: 6px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);
    &:hover{
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
    }
    > .iconfont{
        font-size: 20px;
        margin-right: 10px;
        pointer-events: none;
    }
}

.on_off_lamp_column{
    .iconfont{
        display: block;
        margin: 0 0 10px 0;
        text-align: center;
    }
}
</style>