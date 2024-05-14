<template>
    <a-input
        :value="value"
        :placeholder="$attrs.placeholder"
        :allowClear="$attrs.allowClear"
        @change="change"
    />
</template>

<script>
export default {
    props: ['value'],
    model: {
        prop: "value",
        event: "change",
    },
    methods: {
        change(e) {
            this.$emit('change', (e.target.value || '').trim());
        },
    }
}
</script>