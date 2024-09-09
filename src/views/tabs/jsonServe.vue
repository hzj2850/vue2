<template>
    <div class="page">
        <table border="1">
            <tr v-for="(item, index) in users" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.age }}</td>
                <td>
                    <a @click="onDel(item)">删除</a>
                    <a @click="onEdit(item)">修改</a>
                </td>
            </tr>
        </table>

        <div class="label-row">
            姓名：
            <a-input v-model="user.name" placeholder="请输入" />
            年龄：
            <a-input-number v-model="user.age" placeholder="请输入" />
            <a-button @click="add()">{{ user.id ? '修改' : '添加' }}</a-button>
        </div>
        <a-pagination
            show-size-changer
            :default-current="3"
            :total="500"
            @showSizeChange="onSize"
            @change="onSize"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [],
            user: {},
        }
    },
    mounted() {
        this.getlist();
    },
    methods: {
        onSize(v, s) {
            const obj = {_page: v, _limit: s};
            this.$userApi.getUsers(obj).then(res => this.users = res);
        },
        add() {
            const key = this.user.id ? 'edit' : 'add';
            this.$userApi[key](this.user).then(() => {
                this.user = {};
                this.getlist();
            })
        },
        onDel(e) {
            this.$userApi.del(e.id).then(() => this.getlist());
        },
        getlist() {
            this.$userApi.getUsers().then(v => this.users = v);
        },
        onEdit(e) {
            this.user = {...e};
        },
    }
}
</script>

<style lang="less" scoped>
.page{
    background: #fff;
    color: #000;
}

.label-row{
    display: flex;
    align-items: center;
    margin: 10px;
    .ant-input, .ant-input-number{
        width: 120px;
        margin-right: 10px;
    }
}

table{
    width: 50vw;
    text-align: center;
    margin: 10px;
    tr{
        padding: 10px;
        td{
            width: 200px;
        }
    }
}

a{
    margin: 6px;
}

.ant-pagination{
    margin: 10px;
}
</style>