<template>
    <div>
        <div class="shopping">
            <div class="md1">
                <div v-for="e in 126" :key="e" @click="bindItem">
                    {{ e }}
                </div>
            </div>
            <div class="md2">
                2222222222222222222222
            </div>
        </div>
        <div class="target" ref="target">目标</div>
    </div>
</template>

<script>
import funParabola from '@/utils/funParabola'
export default {
    methods: {
        bindItem(ev) {
            funParabola(ev.target, this.$refs.target, {
                curvature: 0.0005,
                complete: () => {
                    ev.target.style.opacity = 0;
                }
            }).mark().move();
        },
    }
}
</script>

<style lang="less" scoped>
.shopping{
    display: flex;
    > div{
        flex: 1;
    }
}

.md1{
    > div {
        width: 60px;
        line-height: 60px;
        background: #03134b;
        margin: 2px;
        float: left;
        cursor: pointer;
        user-select: none;
        text-align: center;
        border-radius: 50%;
        box-shadow: inset 0px 0.86px 17.28px rgba(18, 142, 232, 0.35);
        &:hover{
            box-shadow: inset 0px 0.86px 17.28px rgba(255, 255, 255, 0.5);
        }
    }
}

.target {
    width: 120px;
    line-height: 60px;
    border-radius: 30px;
    border: 1px solid #02c5f8;
    text-align: center;
    position: fixed;
    right: 10%;
    bottom: 40%;
    background: #03134b;
}
</style>