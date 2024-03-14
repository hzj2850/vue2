<template>
    <div>
        <ant-form ref="form" @callback="onCall"></ant-form>
        <button @click="onSubmit">提交</button>
    </div>
</template>

<script>
import antForm from '../../components/ant-form/ant-form.vue'
export default {
    components: {
        antForm
    },
    methods: {
        onSubmit() {
            this.$refs.form.onSubmit(res => {
                console.log('成功提交：', res);
            });
        },
        onCall(v) {
            console.log(v,'jjjj')
        },
    }
}
</script>