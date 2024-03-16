<template>
    <a-radio-group :value="value" :options="options" @change="bindChange" />
</template>

<script>
export default {
    props: {
        value: {
            type: [String, Number]
        },
        options: {
            type: Array,
            default: () => [
                { label: "是", value: 1 },
                { label: "否", value: 2 },
            ],
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
    watch: {
        value(v, v2) {
            if(v && !v2) this.$emit('change', v);
        }
    },
}
</script>