<template>
    <a-checkbox-group :value="ival" :options="options" @change="bindChange"/>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            default: () => [
                { label: "语文", value: '1' },
                { label: "数学", value: '2' },
                { label: "英语", value: '3' },
            ],
        },
        value: {
            type: [String, Array]
        },
    },
    model: {
        prop: "value",
        event: "change",
    },
    computed: {
        ival() {
            const v = this.value;
            if(!v) return [];
            return typeof v === 'string' ? (v || '').split(',') : v;
        }
    },
    methods: {
        bindChange(v) {
            this.$emit('change', v);
        },
    },
    watch: {
        ival(a, b) {
            if(a.length && !b.length) this.$emit('change', a);
        },
    },
}
</script>