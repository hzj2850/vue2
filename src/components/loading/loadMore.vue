<template>
    <div class="loading-more middle_center">
        <a-icon class="center_body" type="loading" style="font-size: 0.24rem;margin-right:0.1rem;" v-if="loading == 'loading'" />
        {{loading == 'loading' ? '加载中' : loading == 'loadMore' ? '上拉加载更多' : '已经到底了'}}
    </div>
</template>

<script>
export default {
    props: {
        loading: {
            type: String,
            default: 'loading'
        }
    }
}
</script>

<style lang="less" scoped>
.loading-more{
    text-align: center;
    line-height: 0.4rem;
    color: @warning-color;
    user-select: none;
    background: @bg-white-1;
}
</style>