<template>
    <div class="ErrPage">
        <img src="../assets/404.svg" alt="路由错误">
    </div>
</template>

<script>
export default {
    name: 'ErrPage',
    data() {
        return {
            
      }
    },
    mounted() {
        
    },
}
</script>

<style scoped>
.ErrPage{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 99vh;
}
.ErrPage > img{
    display: block;
    width: 60%;
    height: 60%;
}
</style>