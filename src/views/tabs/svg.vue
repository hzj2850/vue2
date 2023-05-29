<template>
    <div>
        <my-btn text="照明总开" type="deongaree"/>
        <my-btn text="照明总关" type="alarm"/>
        <my-btn text="商店" type="success" @callback="$router.push({name: 'shop'})" />
    </div>
</template>

<script>
import MyBtn from '@/components/svg/my-btn.vue'
export default {
    components: {
        MyBtn,
    },
}
</script>

<style lang="less" scoped>
.my_btn_1 {
    margin: 30px;
}
</style>
