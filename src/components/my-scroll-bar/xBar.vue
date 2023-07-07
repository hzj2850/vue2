<script>
import drag from '@/utils/DragScale'
export default {
    data() {
        return {
            hover: false,
        }
    },
    render() {
        const a = {
            class: {
                'x-bar': true,
                'bar-hover': this.hover
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
            class: {
                'bar_end': this.$attrs.left === 0
            },
            on: {
                click: () => this.bindClick('l'),
            }
        }
        const r = {
            class: {
                'bar_end': this.$attrs.left === this.getBar()
            },
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
            if(!this.$refs.bar) return 0;
            return this.$refs.bar.clientWidth - this.$refs.box.offsetWidth;
        },
        // 拖动
        dragBox() {
            drag.drag({
                target: this.$refs.box,
                change: e => this.$emit('call', e),
                down: () => this.hover = true,
                up: () => this.hover = false,
            })
        },
        // 左右滑动按钮
        bindClick(t) {
            const b = this.$refs.box,
                  l = b.offsetLeft,
                  s = b.offsetWidth * 0.2,
                  x = t === 'l' ? l - s : l + s;
            this.$emit('call', {x, type: 'click'});
        },
    },
}
</script>

<style lang="less" scoped>
@import url('./bar.less');
</style>
