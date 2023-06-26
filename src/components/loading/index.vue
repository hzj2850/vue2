<script>
export default {
    render() {
        const o = {
            class: {
                'my-loading-com': true,
            },
            style: {
                'display': this.visible ? 'block' : 'none',
            }
        }
        return <div {...o}>
            <span class="loading-slot">
                <a-spin size="large" />
                <div class="innerHTML" domPropsInnerHTML={ this.defaultText }></div>
            </span>
        </div>
    },
    data() {
        return {
            visible: false,
            defaultText: "加载中",
        }
    },
    methods: {
        show(v) {
            // Boolean
            if(v === true || v === false) {
                this.defaultText = "加载中";
                return this.visible = v;
            }

            // Object
            if(v instanceof Object) {
                this.defaultText = v.text || "加载中";
                return this.visible = true;
            }

            // String
            this.defaultText = v || "加载中";
            this.visible = !this.visible;
        },
    },
}
</script>

<style lang="less" scoped>
.my-loading-com {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    text-align: center;
    &::before{
        vertical-align: middle;
        content: '';
        display: inline-block;
        width: 0;
        height: 100%;
    }
    > .loading-slot{
        font-size: 20px;
        color: #fff;
        display: inline-block;
        > .innerHTML{
            margin-top: 20px;
            text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
        }
    }
}
</style>