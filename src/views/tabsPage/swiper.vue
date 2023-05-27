<template>
    <div>
        <MySwiper :list="list" :loop="false">
            <a-icon type="left-circle" slot="prev" />
            <a-icon type="right-circle" slot="next" />

            <div class="item" v-for="(item, index) in list" :key="index">
                <img :src="item.img" :alt="index">
                <div class="del" @click.stop="bindDel(index)">删除</div>
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
                { img: require('@/assets/images/swiper/1.jpg') },
                { img: require('@/assets/images/swiper/2.jpg') },
                { img: require('@/assets/images/swiper/3.jpeg') },
                { img: require('@/assets/images/swiper/4.jpeg') },
                { img: require('@/assets/images/swiper/5.jpeg') },
                { img: require('@/assets/images/swiper/6.jpeg') },
                { img: require('@/assets/images/swiper/7.jpeg') },
            ]
        }
    },
    mounted() {
    },
    methods: {
        upload(o) {
            this.list.push({ img: o.url });
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
        left: 50%;
        top: 50%;
        z-index: 3;
        text-shadow: 0 0 4px #000;
        cursor: pointer;
    }
}
</style>