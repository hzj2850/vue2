<template>
    <div class="cropper-img">
        <div class="ctx-main">
            <cropper-img ref="img" :option="option" @realTime="realTime" />
            <!--预览效果图-->
            <div class="preview">
                <div class="img1" ref="img1"></div>
                <div class="img2" ref="img2"></div>
            </div>
        </div>
        <!--底部操作工具按钮-->
        <div class="footer-btn">
            <input type="file" id="uploads" accept="image/png, image/jpeg, image/gif, image/jpg" @change="selectImg($event)" v-show="false">
            <label class="btn" for="uploads">上传图片</label>

            <span @click="changeScale(1)">放大</span>
            <span @click="changeScale(-1)">缩小</span>
            <span @click="onReset()">还原</span>
            <span @click="changeRotate('left')">↺ 左旋转</span>
            <span @click="changeRotate('right')">↻ 右旋转</span>
            <span @click="onCrop()">裁切图片</span>
        </div>
    </div>
</template>

<script>
import CropperImg from './VueCropper.vue'
export default {
    name: "CropperImage",
    components: { CropperImg },
    data() {
        return {
            option:{
                img: "https://img1.baidu.com/it/u=1546227440,2897989905&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1689181200&t=64997311b381ed2a8ad60c158292949f",             //裁剪图片的地址
                autoCrop: true,
                autoCropWidth: 160,
                autoCropHeight: 160,
                fixedBox: true,
                centerBox: true,
            }
        }
    },
    methods: {
        // 缩放
        changeScale(t) {
            this.$refs.img.setScale(t);
        },
        // 旋转
        changeRotate(t) {
            this.$refs.img.setRotate(t);
        },
        // 还原
        onReset() {
            this.$refs.img.setReset();
        },
        realTime(o) {
            this.$refs.img1.innerHTML = o.html;
            this.$refs.img2.innerHTML = o.html;
        },
        // 选中图片
        selectImg(e) {
            const file = e.target.files[0], obj = new FileReader(), that = this;
            obj.readAsDataURL(file);
            obj.onloadend = function () {
                that.option.img = this.result;
            }
        },
        // 获取裁切图片
        onCrop() {
            this.$refs.img.getCropBlob(res => {
                console.log('获取裁切图片',res);
            });
        },
    }
}
</script>

<style lang="less" scoped>
.cropper-img{
    width: 600px;
    height: 400px;
    margin: auto;
    background: #fff;
    > .ctx-main{
        display: flex;
        height: calc(100% - 60px);
    }
}

.vue-cropper{
    flex: 1;
    height: 100%;
}

.preview{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 180px;
    > div{
        width: 160px;
        height: 160px;
        overflow: hidden;
        box-shadow: 0 10px 10px rgba(0,0,0,0.2);
    }
    > .img1{
        zoom: 0.8;
        border-radius: 50%;
    }
    > .img2{
        zoom: 0.8;
    }
}

.footer-btn{
    user-select: none;
    text-align: center;
    span, label{
        cursor: pointer;
        margin: 10px;
        background: blue;
        display: inline-block;
        padding: 5px 10px;
        border-radius: 4px;
    }
}
</style>