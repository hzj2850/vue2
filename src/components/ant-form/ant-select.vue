<template>
    <div class="my-select-com">
        <a-select
            :value="value"
            :placeholder="$attrs.placeholder"
            :options="$attrs.options"
            :getPopupContainer="v => v.parentNode"
            @change="v => $emit('change', v)"
        />
    </div>
</template>

<script>
export default {
    props: ['value'],
    model: {
        prop: "value",
        event: "change",
    },
}
</script>

<style lang="less" scoped>
.my-select-com{
    position: relative;
}
.ant-select{
    width: 100%;
}
/deep/ .ant-select-dropdown{
    border: 1px solid red;
}
</style>
