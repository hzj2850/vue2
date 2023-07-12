<script>
// 官网：https://github.com/xyxiao001/vue-cropper
import { VueCropper } from 'vue-cropper'
export default {
    components: { VueCropper },
    data() {
        return {
            rotate: 0,
            zoom: 0,
        }
    },
    render() {
        const o = {
            props: this.$attrs.option || {},
            on: this.$listeners,
        }
        return <vue-cropper ref="cropper" {...o} />
    },
    methods: {
        // 缩放
        setScale(t = 1) {
            if(t > 0) this.zoom++;
            else this.zoom--;
            this.$refs.cropper.changeScale(t)
        },
        // 旋转
        setRotate(t) {
            if(t === 'left') {
                this.rotate === 3 ? this.rotate = 0 : this.rotate++;
                this.$refs.cropper.rotateLeft();
            } else {
                this.rotate === -3 ? this.rotate = 0 : 
                this.rotate--;
                this.$refs.cropper.rotateRight();
            }
        },
        // 重置
        setReset() {
            let z = this.zoom, zz = Math.abs(z), r = this.rotate, rr = Math.abs(r);
            if(zz > 0) {
                for(let i = 0; i < zz; i++) {
                    this.setScale(z > 0 ? -1 : 1);
                }
            }
            if(rr > 0) {
                for(let i = 0; i < rr; i++) {
                    this.setRotate(r < 0 ? 'left' : 'right');
                }
            }
            this.zoom = 0;
            this.rotate = 0;
        },
        // 获取截图的blob数据
        getCropBlob(fn) {
            this.$refs.cropper.getCropBlob(r => (fn && fn(r)));
        },
        getCropBase64(fn) {
            this.$refs.cropper.getCropData(r => (fn && fn(r)));
        },
    }
}
</script>
