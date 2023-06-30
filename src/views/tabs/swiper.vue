<template>
    <div>
        <MySwiper :list="list" :loop="false">
            <a-icon type="left-circle" slot="prev" />
            <a-icon type="right-circle" slot="next" />

            <div class="item" slot="slide" slot-scope="item, index">
                <img v-lazy="item.img" :alt="index">
                <div class="del" @click.stop="bindDel(index)">删除</div>
            </div>

            <div class="no-list" slot="default">
                没有数据
            </div>
        </MySwiper>

        <MyUpload style="margin-top: 30px;" :upload="upload">
            <a-button>上传图片（{{ list.length }}）</a-button>
        </MyUpload>
    </div>
</template>

<script>
import MySwiper from '@/components/my-swiper.vue'
import MyUpload from '@/components/my-ant/my-upload.vue'
export default {
    components: {
        MySwiper,
        MyUpload
    },
    data() {
        return {
            list: [
                { id: 2, img: require('@/assets/img/swiper/2.jpeg') },
                { id: 1, img: require('@/assets/img/swiper/1.jpg') },
            ]
        }
    },
    mounted() {
    },
    methods: {
        upload(o) {
            this.list.push({ id: this.list.length + 1, img: o.url });
            return Promise.resolve(o);
        },
        bindDel(index) {
            this.list.splice(index, 1);
        }
    }
}
</script>

<style lang="less" scoped>
.my-swiper{
    height: 60vh;
    width: 80vw;
    margin: 0 auto;
    border: 1px solid red;
}
.item{
    width: 100%;
    height: 100%;
    position: relative;
    > img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .del{
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 3;
        text-shadow: 0 0 4px #000;
        cursor: pointer;
    }
}
/deep/ .no-list{
    background: rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>