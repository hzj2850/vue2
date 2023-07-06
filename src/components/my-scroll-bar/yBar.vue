<script>
import DragScale from '@/utils/DragScale'
export default {
    data() {
        return {
            hover: false,
        }
    },
    render() {
        const a = {
            class: {
                'y-bar': true,
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
                top: this.$attrs.top + 'px',
                height: this.$attrs.height + 'px',
            }
        }
        const l = {
            class: {
                'bar_end': this.$attrs.top === 0
            },
            on: {
                click: () => this.bindClick('t'),
            }
        }
        const r = {
            class: {
                'bar_end': this.$attrs.top === this.getBar()
            },
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
            if(!this.$refs.bar) return 0;
            return this.$refs.bar.clientHeight - this.$refs.box.offsetHeight;
        },
        // 拖动
        dragBox() {
            const drag = new DragScale();
            drag.drag({
                tBox: this.$refs.box,
                target: this.$refs.box,
                change: e => this.$emit('call', e),
                down: () => this.hover = true,
                up: () => this.hover = false,
            })
        },
        // 左右滑动按钮
        bindClick(t) {
            const b = this.$refs.box,
                  l = b.offsetTop,
                  s = b.offsetHeight * 0.2,
                  y = t === 't' ? l - s : l + s;
            this.$emit('call', {y, type: 'click'});
        },
    },
}
</script>

<style lang="less" scoped>
@import url('./bar.less');
</style>
