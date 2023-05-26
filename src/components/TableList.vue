<template>
    <div class="table-list">
        <div :class="['item', {'table_list_header': item.table_list_header}]" v-for="(item, index) in listData" :key="index">
            <div class="col" v-for="(e, i) in columns" :key="i" :style="{'minWidth': e.minWidth, 'maxWidth': e.maxWidth, 'width': e.width}">
                <slot :name="item.table_list_header ? e.slot + '-head' : e.slot">
                    {{ item.table_list_header ? e.title : item[e.slot] || '--' }}
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        columns: {
            type: Array,
            default: () => {
                return []
            }
        },
        data: {
            type: Array,
            default: () => {
                return []
            }
        },
    },
    computed: {
        listData() {
            return [
                { table_list_header: this.columns },
                ...this.data
            ];
 
        },
    },
}
</script>

<style lang="less" scoped>
.table-list{
    border: 1px solid red;
    overflow: auto;
    height: 500px;
}

.item{
    display: flex;
    margin-top: 1px;
}

.col{
    background: rgba(255, 255, 255, 0.1);
    flex: 1;
    padding: 10px;
    min-height: 70px;
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    word-break: break-all;
    text-align: justify;
    &:first-child{
        &::before{
            border: none;
        }
    }
    &::before{
        content: '';
        display: block;
        width: 0;
        height: 80%;
        border-left: 1px solid red;
        position: absolute;
        left: 0;
        top: 10%;
    }
}

.table_list_header{
    position: sticky;
    top: 0;
    margin: 0;
    z-index: 2;
    .col{
        background: yellowgreen;
    }
}
</style>