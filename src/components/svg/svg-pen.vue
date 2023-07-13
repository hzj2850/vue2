<script>
export default {
    props: {
        bg: {
            type: String,
            default: '#ccc'
        },
        type: {
            type: String,
            default: 'left'
        }
    },
    render() {
        return <div class="pen-arrow" ref="div">
            <svg width="100%" height="100%">
                <polygon points={this.points} style={{fill: this.$props.bg}}/>
            </svg>
            <span class={['btn', this.$props.type]} ref="btn">{this.$scopedSlots.default()}</span>
        </div>
    },
    data() {
        return {
            points: '',
        }
    },
    mounted() {
        const el = this.$refs.btn,
              w = parseFloat(el.offsetWidth),
              h = parseFloat(el.offsetHeight);
        this.$refs.div.style.width = w + "px";
        this.$refs.div.style.height = h + "px";
        if(this.$props.type === 'left') this.points = `${h / 2},0 ${w},0 ${w - h / 2},${h / 2} ${w},${h} ${h / 2},${h} 0,${h / 2}`;
        if(this.$props.type === 'right') this.points = `0,0 ${w - h / 2},0 ${w},${h / 2} ${w - h / 2},${h} 0,${h} ${h / 2},${h / 2}`;
    }
}
</script>

<style lang="less" scoped>
.pen-arrow{
    display: inline-block;
    position: relative;
    > .btn{
        display: inline-block;
        line-height: 45px;
        padding: 0 35px 0 30px;
        position: absolute;
        left: 0;
        top: 0;
        font-size: 18px;
        white-space: nowrap;
    }
    > .right{
        padding: 0 30px 0 35px;
    }
}
</style>