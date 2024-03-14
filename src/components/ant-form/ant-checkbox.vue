<template>
    <a-checkbox-group :options="options" />
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            default: () => [
                { label: "语文", value: 1 },
                { label: "数学", value: 2 },
                { label: "英语", value: 3 },
                { label: "物理", value: 4 },
            ],
        }
    }
}
</script>