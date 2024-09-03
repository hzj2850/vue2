<template>
    <form-render :layout="layout" :form="form" :rules="rules" :params="params" :size="size">
        <!-- 单行输入框 -->
        <template #input="e">
            <a-input
                :size="size"
                :placeholder="getpla(e)"
                :disabled="getdis(e)"
                :value="getval(e)"
                @change="change($event, e, 1)"
            />
        </template>
        <!-- 多行输入框 -->
        <template #textarea="e">
            <a-textarea
                :size="size"
                :placeholder="getpla(e)"
                :disabled="getdis(e)"
                :value="getval(e)"
                @change="change($event, e, 1)"
            />
        </template>
        <!-- 数字输入框 -->
        <template #number="e">
            <a-input-number
                :size="size"
                :min="e.min"
                :max="e.max"
                :placeholder="getpla(e)"
                :disabled="getdis(e)"
                :value="getval(e)"
                @change="change($event, e, 2)"
            />
        </template>
        <!-- 下拉框（单选） -->
        <template #select="e">
            <a-select
                :size="size"
                :placeholder="getpla(e)"
                :disabled="getdis(e)"
                :value="getval(e)"
                :options="getopt(e)"
                @change="change($event, e, 2)"
            />
        </template>
        <!-- 多选框（多个） -->
        <template #checkbox="e">
            <a-checkbox-group
                :size="size"
                :disabled="getdis(e)"
                :value="getval(e)"
                :options="getopt(e)"
                @change="change($event, e, 2)"
            />
        </template>
        <!-- 多选框（单个） -->
        <template #checkbox2="e">
            <a-checkbox
                :size="size"
                :disabled="getdis(e)"
                :checked="getval(e)"
                @change="change($event, e, 3)">
                {{ e.text || '' }}
            </a-checkbox>
        </template>
        <!-- 单选框（多个） -->
        <template #radio="e">
            <a-radio-group
                :size="size"
                :disabled="getdis(e)"
                :value="getval(e)"
                :options="getopt(e)"
                @change="change($event, e, 1)"
            />
        </template>
        <!-- 单选框（单个） -->
        <template #radio2="e">
            <a-radio
                :size="size"
                :disabled="getdis(e)"
                :value="getval(e)"
                @change="change($event, e, 3)">
                {{ e.text || '' }}
            </a-radio>
        </template>
        <!-- 日期选择器 -->
        <template #date="e">
            <a-date-picker
                :size="size"
                :format="e.format || 'YYYY年M月D日'"
                :placeholder="getpla(e)"
                :disabled="getdis(e)"
                :value="getval(e, 4)"
                @change="change($event, e, 4)"
            />
        </template>
        <!-- 日期范围 -->
        <template #range="e">
            <a-range-picker
                :size="size"
                :format="e.format || 'YYYY年M月D日'"
                :placeholder="getpla(e)"
                :disabled="getdis(e)"
                :value="getval(e, 4)"
                @change="change($event, e, 4)"
            />
        </template>
    </form-render>
</template>

<script>
import { formRender } from './form/render'
import { getdis, getval, getpla, getopt, change, validate, setStyle } from './form/form'
export default {
    props: {
        layout: {
            type: Array,
            default: () => ([])
        },
        form: {
            type: Object,
            default: () => ({})
        },
        rules: {
            type: Object,
            default: () => ({})
        },
        params: {
            type: Object,
            default: () => ({})
        },
        size: {
            type: String
        },
    },
    components: {
        'form-render': {
            functional: true,
            render: formRender,
        }
    },
    mounted() {
        setStyle(this.$el);
    },
    methods: {
        getdis(e) {
            return getdis(e, this.form);
        },
        getval(e, t) {
            return getval(e, this.form, t);
        },
        getpla(e) {
            return getpla(e);
        },
        getopt(e) {
            return getopt(e, this.params);
        },
        change(v, e, t) {
            return change(this, v, e, t);
        },
        submit(fn) {
            return validate(this.$refs.form, fn);
        },
    }
}
</script>

<style lang="less" scoped>
@import url('./form/form.less');
</style>
