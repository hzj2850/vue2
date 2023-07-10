<template>
    <div>
        <a-button @click="$refs.modal.open()">弹框</a-button>
        <a-button @click="onBack()">给上一页传参</a-button>

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

        <div v-for="e in 100" :key="e" @click="$router.push({name: 'shopDetails2'})" style="line-height: 60px;padding:0 20px;">{{ e }}</div>
    </div>
</template>

<script>
import MyModal from '@/components/my-ant/my-modal.vue'
import MyMenu from '@/components/my-ant/my-menu.vue'
import { keepAlive } from '@/utils/setting/mixins'
export default {
    name: 'shopDetails',
    mixins: [keepAlive],
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
    mounted() {
        console.log('2.mounted');
    },
    activated() {
        console.log("2.activated", JSON.stringify(this.fromMeta));
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
            this.$router.go(-1);
        },
    }
}
</script>