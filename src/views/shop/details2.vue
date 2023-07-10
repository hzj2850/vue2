<template>
    <div>
        <a-button @click="onBack()">给商品详情传参</a-button>
    </div>
</template>

<script>
export default {
    methods: {
        onBack() {
            this.$route.meta.obj = {text: '更新详情页'};
            this.$router.go(-1);
        }
    }
}
</script>