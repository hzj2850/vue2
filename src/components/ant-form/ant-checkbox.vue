<template>
    <a-checkbox-group
        :value="value"
        :options="$attrs.options || [{ label: '语文', value: '1' }, { label: '数学', value: '2' }]"
        @change="v => $emit('change', v || [])"
    />
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