<template>
    <div>
        <a-button @click="$refs.modal.open()">弹框</a-button>
        <a-button @click="onBack()">给上一页传参</a-button>
        <a-button @click="$router.push({name: 'shopDetails2'})">details2</a-button>


        <MyModal ref="modal" type="modal" title="弹框">
            这是弹框1
        </MyModal>
        <MyModal type="div" title="弹框">
            这是弹框2
        </MyModal>

        <MyMenu :default-open-keys="['2']" :selected-keys="[current]" mode="inline" @click="bindMenu">
            <div slot-scope="item">
                {{ item.title }}
            </div>
        </MyMenu>
    </div>
</template>

<script>
import MyModal from '@/components/my-ant/my-modal.vue'
import MyMenu from '@/components/my-ant/my-menu.vue'
export default {
    components: {
        MyModal,
        MyMenu,
    },
    data() {
        return {
            modal: 'modal',
            current: '2-1'
        }
    },
    methods: {
        bindMenu(o) {
            this.current = o.key;
        },
        onBack() {
            this.$route.meta.obj = {
                text: '返回上一页的参数',
                ...this.$route.query
            };
            // this.$router.go(-1);
        },
    }
}
</script>