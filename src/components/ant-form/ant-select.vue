<template>
    <div class="select-com">
        <a-select :options="options" :getPopupContainer="v => v.parentNode" />
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            default: () => ([
                { label: "语文", value: 1 },
                { label: "数学", value: 2 },
                { label: "英语", value: 3 },
            ])
        }
    }
}
</script>

<style lang="less" scoped>
/deep/ .ant-select-dropdown{
    border: 1px solid red;
}
</style>
