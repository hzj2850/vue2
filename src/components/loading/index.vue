<script>
export default {
    render() {
        const o = {
            class: {
                'my-load-1': true,
            },
        }
        return <transition name="loading" appear>
            <div {...o} v-show={this.visible}>
                <span>
                    { this.defaultText || '加载中' }
                </span>
            </div>
        </transition>
    },
    data() {
        return {
            visible: false,
            defaultText: '',
        }
    },
    methods: {
        show(v) {
            if(v) {
                this.defaultText = v instanceof Object ? v.text : typeof v !== 'boolean' ? v : '';
                this.visible = true;
            } else {
                this.visible = false;
            }
        },
    },
}
</script>

<style lang="less" scoped>
.my-load-1 {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    user-select: none;
    // 垂直、水平居中
    text-align: center;
    &::before{
        content: '';
        display: inline-block;
        width: 0;
        height: 100%;
        vertical-align: middle;
    }

    > span{
        font-size: 20px;
        color: #fff;
        text-shadow: 0 1px 4px #222;
    }
}

// 过度动画
.loading-enter-active {
    animation: enterLoad1 300ms linear;
}
.loading-leave-active {
    animation: leaveLoad1 1200ms linear;
}

@keyframes enterLoad1 {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
@keyframes leaveLoad1 {
    0%{
        opacity: 1;
    }
    80%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
</style>