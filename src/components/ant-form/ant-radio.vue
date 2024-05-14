<template>
    <a-radio-group
        :value="value"
        :options="$attrs.options || [{label: '是', value: '1'}, {label: '否', value: '2'}]"
        @change="v => $emit('change', v.target.value)"
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