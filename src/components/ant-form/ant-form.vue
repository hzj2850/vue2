<template>
    <a-form-model ref="form" :model="form" :rules="rules">
        <form-layout>
            <template #item="e">
                <form-com :item="e" :form="form"/>
            </template>
        </form-layout>
    </a-form-model>
</template>

<script>
import { render, render2, validate, setStyle } from './form.js';
export default {
    props: ['layout', 'form', 'rules'],
    components: {
        'form-layout': {
            functional: true,
            render
        },
        'form-com': {
            functional: true,
            render: render2,
        },
    },
    methods: {
        // 提交表单
        submit(fn) {
            return validate(this.$refs.form, fn);
        },
        // 配置组件回调
        change(e, v) {
            this.$set(this.form, e.key, v);
            e.callback && e.callback(v, this);
        },
    },
    watch: {
        'layout': {
            deep: true,
            immediate: true,
            handler() {
                this.$nextTick(() => setStyle(this.$el));
            }
        }
    },
}
</script>

<style lang="less" scoped>
@import url('./form.less');
</style>
