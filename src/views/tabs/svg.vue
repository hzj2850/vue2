<template>
    <div>
        <my-btn text="照明总开" type="deongaree"/>
        <my-btn text="照明总关" type="alarm"/>
        <my-btn text="区域1总关" type="success"/>
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
