<template>
    <a-form-model ref="ruleForm" :model="form" :rules="rules" :colon="colon" :hideRequiredMark="hideRequiredMark" :labelAlign="labelAlign" :layout="layout">
        <a-form-model-item v-for="(item, index) in formList" :key="index" :label="item.label" :prop="item.key">
            <!-- 单选框 -->
            <ant-radio @change="onRadio($event, item)" v-if="item.slot === 'radio'" />
            <!-- 多选框 -->
            <ant-checkbox v-else-if="item.slot === 'checkbox'" />
            <!-- 日期 -->
            <ant-date v-else-if="item.slot === 'date'" />
            <!-- 月份 -->
            <ant-month v-else-if="item.slot === 'month'" />
            <!-- 星期 -->
            <ant-week v-else-if="item.slot === 'week'" />
            <!-- 时间段 -->
            <ant-range v-else-if="item.slot === 'range'" />
            <!-- 输入框 -->
            <ant-input v-else-if="item.slot === 'input'" />
            <!-- 数字输入框 -->
            <ant-number v-else-if="item.slot === 'number'" />
            <!-- 下拉框 -->
            <ant-select v-else-if="item.slot === 'select'" />
            <!-- 插槽 -->
            <slot v-else :name="item.slot">{{ item.slot }} 插槽</slot>
        </a-form-model-item>
        <div style="width: 100%;">{{ form }}</div>
    </a-form-model>
</template>

<script>
import {rules, formList, setStyle, submitFn} from './cfig'
export default {
    props: {
        form: {
            type: Object,
            default: () => ({})
        },
        rules: {
            type: Object,
            default: () => (rules)
        },
        formList: {
            type: Array,
            default: () => (formList)
        },
        // 是否显示 label 后面的冒号
        colon: {
            type: Boolean,
            default: true
        },
        // 是否隐藏 label 前面的必选标记
        hideRequiredMark: {
            type: Boolean,
            default: false
        },
        // label 标签布局
        labelAlign: {
            type: String,
            default: 'left'
        },
        // 表单布局 vertical | inline
        layout: {
            type: String,
            default: 'horizontal',
        }
    },
    mounted() {
        setStyle(this);
    },
    methods: {
        onSubmit(fn) {
            return submitFn(this, () => (fn && fn(this.form)));
        },
        resetForm() {
            this.$refs.ruleForm.resetFields();
        },
        // 单选框
        onRadio(v, e) {
            this.$set(this.form, e.key, v);
            this.$listeners['callback'] && this.$emit('callback', {e,v});
        },
    },
}
</script>

<style lang="less" scoped>
.ant-form{
    background: #fff;
    
    /deep/ .has-error{
        .ant-radio-inner{
            border-color: red;
        }
    }
}

// 水平布局
.ant-form-horizontal{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    
    .ant-form-item{
        margin: 0;
        width: 30%;
        display: flex;
        align-items: flex-start;
        &::before, &::after{
            display: none;
        }
    }
    /deep/ .ant-form-item-control-wrapper{
        flex: 1;
    }
    /deep/ .ant-form-explain{
        display: none;
    }
}

</style>