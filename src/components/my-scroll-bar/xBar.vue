<script>
import DragScale from '@/utils/DragScale'
export default {
    render() {
        const a = {
            class: {
                'y-bar': true
            },
            style: {
                width: this.$attrs.show ? undefined : 0,
            }
        }
        const b = {
            
        }
        const c = {
            style: {
                left: this.$attrs.left + 'px',
                width: this.$attrs.width + 'px',
            }
        }
        const l = {
            on: {
                click: () => this.bindClick('l'),
            }
        }
        const r = {
            on: {
                click: () => this.bindClick('r'),
            }
        }
        return <div {...a}>
            <span {...l}></span>
            <div {...b} ref="bar">
                <i {...c} ref="box"/>
            </div>
            <span {...r}></span>
        </div>
    },
    mounted() {
        this.dragBox();
    },
    methods: {
        getBar() {
            return this.$refs.bar.clientWidth - this.$refs.box.offsetWidth;
        },
        // 拖动
        dragBox() {
            const drag = new DragScale();
            drag.drag({
                tBox: this.$refs.box,
                target: this.$refs.box,
                change: e => this.$emit('call', e),
            })
        },
        // 左右滑动按钮
        bindClick(t) {
            const b = this.$refs.box,
                  l = b.offsetLeft,
                  s = b.offsetWidth * 0.2,
                  x = t === 'l' ? l - s : l + s;
            this.$emit('call', {x});
        },
    },
}
</script>

<style lang="less" scoped>
.y-bar{
    position: absolute;
    z-index: 999;
    left: 0;
    bottom: 0;
    width: 90%;
    display: flex;
    align-items: center;
    overflow: hidden;
    > div{
        flex: 1;
        height: 2px;
        background: blue;
        position: relative;
        > i{
            display: inline-block;
            min-width: 20px;
            height: 10px;
            background: yellow;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    > span{
        width: 20px;
        height: 20px;
        background: red;
        display: inline-block;
        background: pink;
    }
}
</style>