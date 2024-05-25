<template>
    <div class="user-info-page">
        <p>{{ form }}</p>

        <ant-form :form="form" :layout="layout">
            <template #userImg="e">
                <img src="../../assets/img/swiper/1.jpg" :alt="e.text">
            </template>
        </ant-form>

        <div class="footer">
            <a-button type="primary">提交</a-button>
        </div>
    </div>
</template>

<script>
import antForm from '@/components/ant-form/ant-form.vue'
import { getLayout } from './form'
export default {
    components: {
        antForm
    },
    data() {
        return {
            form: {},
        };
    },
    computed: {
        layout() {
            return getLayout(this);
        },
    }
}
</script>

<style lang="less" scoped>
.user-info-page{
    background: #fff;
    color: #333;
    padding: 10px;
}

img{
    width: 200px;
    height: 200px;
    border-radius: 4px;
    object-fit: cover;
}

.footer{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
}
</style>