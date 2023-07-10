<template>
    <div>
        <a-button @click="list+=1">add</a-button>
        <my-scroll-bar ref="bar" :bar="true">
            <div class="group">
                <div class="shop-item" v-for="e in list" :key="e" @click="onItem(e)">{{e}}</div>
            </div>
        </my-scroll-bar>

        <div class="shop-list">
            <div class="shop-item" v-for="e in list" :key="e" @click="onItem(e)">{{e}}</div>
        </div>
        <a-button @click="$router.push({name: 'shopDetails'})">列表</a-button>
    </div>
</template>

<script>
import MyScrollBar from '../../components/my-scroll-bar/index.vue'
import { keepAlive } from '@/utils/setting/mixins'
export default {
    name: 'shop',
    mixins: [keepAlive],
    components: {
        MyScrollBar
    },
    data() {
        return {
            list: 10
        }
    },
    created() {
        console.log('1.created');
    },
    activated() {
        this.$refs.bar.scrollTo();
        console.log('1.activated:', JSON.stringify(this.fromMeta));
    },
    methods: {
        onItem(e) {
            this.$router.push({
                name: 'shopDetails',
                query: {
                    id: e
                }
            })
        },
    }
}
</script>

<style lang="less" scoped>
.item{
    line-height: 70px;
}
.my-scroll-bar{
    border: 1px solid red;
    white-space: nowrap;
    margin: auto;
    width: 600px;
    height: 400px;
}

.shop-list{
    margin: 30px;
}
.shop-item{
    background: #eee;
    margin-top: 10px;
    line-height: 50px;
    padding: 0 20px;
    font-size: 20px;
    cursor: pointer;
    min-width: 708px;
}
</style>