<template>
    <div class="page">
        <a-button @click="submit()">提交</a-button>
        <ant-form ref="form" :layout="layout" :form="form" :rules="rules" :params="params" @change="bindChange">
            <template #title="e">
                <h2>title插槽：{{ e }}</h2>
            </template>
        </ant-form>

        <div v-for="(e, k) of form" :key="k">{{ k + ' = ' + JSON.stringify(e) }}</div>
    </div>
</template>

<script>
import antForm from './ant-form/index.vue'
import { layout, form, rules } from './form'
export default {
    components: { antForm },
    data() {
        return {
            form,
            params: {
                list: [
                    { label: '男', value: 1 },
                    { label: '女', value: 2 },
                ]
            }
        }
    },
    computed: {
        layout() {
            return layout(this);
        },
        rules() {
            return rules(this);
        },
    },
    methods: {
        bindChange(k, v) {
            console.log(k, v)
        },
        submit() {
            this.$refs.form.submit(v => {
                if(v) {
                    this.$message.warning(v);
                } else {
                    alert("提交表单");
                }
            });
        },
    }
}
</script>

<style lang="less" scoped>
.page{
    background: #fff;
    color: #000;
    padding: 30px;
    /deep/ td{
        padding: 10px 15px;
    }
}
</style>