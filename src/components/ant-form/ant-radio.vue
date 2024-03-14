<template>
    <a-radio-group :options="options" @change="bindChange" />
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            default: () => [
                { label: "是", value: 1 },
                { label: "否", value: 2 },
            ],
        },
        value: {
            type: [String, Number]
        },
    },
    model: {
        prop: "value",
        event: "change",
    },
    methods: {
        bindChange(e) {
            this.$emit('change', e.target.value);
        },
    },
}
</script>