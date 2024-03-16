<template>
    <div>
        <ant-form :form="form" ref="form"></ant-form>
        <a-button @click="onSubmit" type="primary">提交</a-button>
        <a-button @click="onClear" type="danger">清空</a-button>
        <div class="form">
            <ant-radio v-model="form.rType" />
            <ant-checkbox v-model="form.checkbox" />
            {{ form }}
        </div>
    </div>
</template>

<script>
import antForm from '../../components/ant-form/ant-form.vue'
export default {
    components: {
        antForm
    },
    data() {
        return {
            form: {}
        };
    },
    methods: {
        onClear() {
            this.form = {};
        },
        onSubmit() {
            this.$refs.form.onSubmit(res => {
                console.log('成功提交：', res);
            });
        },
    }
}
</script>

<style lang="less" scoped>
.form{
    background: #fff;
    padding: 30px;
    color: #333;
}
</style>