<template>
    <div class="user-info-page">
        <p>{{ form }}</p>

        <ant-form :form="form" :layout="layout" :rules="rules" ref="form">
            <template #userImg="e">
                <img src="../../assets/img/swiper/1.jpg" :alt="e.text">
            </template>
        </ant-form>

        <div class="footer">
            <a-button type="primary" @click="onSubmit">提交</a-button>
        </div>
    </div>
</template>

<script>
import antForm from '@/components/ant-form/ant-form.vue'
import { getLayout, rules } from './form'
export default {
    components: {
        antForm
    },
    data() {
        return {
            rules,
            form: {},
        };
    },
    computed: {
        layout() {
            return getLayout(this);
        },
    },
    methods: {
        onSubmit() {
            this.$refs.form.submit(res => {
                if(res) {
                    this.$message.error(res);
                } else {
                    alert("提交表单")
                }
            });
        },
    },
}
</script>

<style lang="less" scoped>
.user-info-page{
    background: #fff;
    color: #333;
    padding: 10px;

    /deep/ td{
        padding: 10px 20px;
        border-color: #e9e9e9;
    }
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