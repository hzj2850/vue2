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
                top: this.$attrs.top + 'px',
                height: this.$attrs.height + 'px',
            }
        }
        const l = {
            on: {
                click: () => this.bindClick('t'),
            }
        }
        const r = {
            on: {
                click: () => this.bindClick('b'),
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
            return this.$refs.bar.clientHeight - this.$refs.box.offsetHeight;
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
                  l = b.offsetTop,
                  s = b.offsetHeight * 0.2,
                  y = t === 't' ? l - s : l + s;
            this.$emit('call', {y});
        },
    },
}
</script>

<style lang="less" scoped>
.y-bar{
    position: absolute;
    z-index: 999;
    right: 0;
    top: 0;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    > div{
        flex: 1;
        width: 2px;
        background: blue;
        position: relative;
        > i{
            display: inline-block;
            min-height: 20px;
            width: 10px;
            background: yellow;
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
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