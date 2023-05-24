<template>
    <span class="my_btn_1" @click="bindClick()">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" version="1.1">
            <defs>
                <linearGradient :id="type" x1="50%" y1="8%" x2="50%" y2="160%" gradientUnits="userSpaceOnUse" v-if="type">
                    <stop offset="0%"   :stop-color="stopStart"/>
                    <stop offset="100%" :stop-color="stopEnd"/>
                </linearGradient>
            </defs>
            <path v-for="d in (obj.pathList || '')" :key="d" :d="d" fill="none" :stroke="stopEnd" />
            <polygon :fill="'url(#' + type + ')'" :points="obj.points" :stroke="stopEnd" />
        </svg>
        <span>
            <slot>{{ text }}</slot>
        </span>
    </span>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: '按钮'
        },
        // 按钮颜色类型
        type: {
            type: String,
            default: ''
        },
        // 是否有权限判断
        limits: {
            type: Boolean,
            default: true
        },
    },
    data() {
        return {
            obj: {},
            bgcfig: {
                alarm: ['rgb(141, 0, 0)', 'rgb(255, 161, 102)'],
                warning: ['rgb(176, 81, 0)', 'rgb(255, 254, 148)'],
                default: ['rgb(134, 134, 134)', 'rgb(181, 181, 181)'],
                deongaree: ['rgb(0, 60, 60)', 'rgb(102, 255, 255)'],
                success: ['rgb(20, 60, 0)', 'rgb(170, 255, 102)'],
            }
        }
    },
    computed: {
        stopStart() {
            return (this.bgcfig[this.type] || [])[0]
        },
        stopEnd() {
            return (this.bgcfig[this.type] || [])[1]
        },

    },
    mounted() {
        const el = document.querySelector('.my_btn_1'), st = window.getComputedStyle(el), w = parseFloat(st.width), h = parseFloat(st.height);
        let r = h * 0.2, xw = h * 0.25, yw = h * 0.2, pd = 3;
        this.obj = {
            pathList: [
                `M 0 ${r + yw} L 0 ${r} L ${r} 0 L ${r + xw} 0`,
                `M 0 ${h - r - yw} L 0 ${h - r} L ${r} ${h} L ${r + xw} ${h}`,
                `M ${w - r - xw} 0 L ${w - r} 0 L ${w} ${r} L ${w} ${r + yw}`,
                `M ${w} ${h - r - yw} L ${w} ${h - r} L ${w - r} ${h} L ${w - r - xw} ${h}`,
            ],
            points: `
                ${pd + r} ${pd},
                ${w - r - pd} ${pd},
                ${w - pd} ${r + pd},
                ${w - pd} ${h - r - pd},
                ${w - r - pd} ${h - pd},
                ${pd + r} ${h - pd},
                ${pd} ${h - r - pd},
                ${pd} ${r + pd}
            `
        }
    },
    methods: {
        async bindClick() {
            const qx = this.limits ? await this.$limits() : true;
            qx && this.$emit('callback')
        },
    },
}
</script>

<style lang="less" scoped>
.my_btn_1{
    display: inline-block;
    position: relative;
    width: 158px;
    height: 56px;
    user-select: none;
    cursor: pointer;
    color: #fff;
    font-size: 20px;
    &:active{
        // transform: scale(1.005);
        opacity: 0.9;
    }
    > span{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 90%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: Source Han Sans CN;
        font-weight: 500;
        line-height: 1.5em;
    }
}
path{
    fill: none;
    stroke-width: 1;
}
polygon{
    stroke-width: 1;
}
</style>