<template>
    <div>
        <div class="body">
            <ant-form ref="form" :layout="formList" :form="form" :rules="rules">
                <template v-slot:s1="e">
                    插槽{{ e.slot }}
                </template>
                <template #s2="e">
                    插槽2--{{ e }}
                </template>
                <div slot="s3" slot-scope="e">
                    这个插槽vue3失效：{{ e }}
                </div>
            </ant-form>
            <ant-form :layout="formList" :form="form" />
        </div>

        <div class="content">
            <p>{{ form }}</p>
            <table style="width: 100%;" border="1">
                <tr>
                    <td>
                        <ant-input v-model="form.name" placeholder="请输入" />
                    </td>
                    <td>
                        <ant-select v-model="form.gj" placeholder="请输入1" :options="[{ label: '语文', value: '1' }, { label: '数学', value: '2' }]"/>
                    </td>
                    <td>
                        <ant-checkbox v-model="form.IDCard" />
                    </td>
                    <td>
                        <ant-radio v-model="form.rType" />
                    </td>
                </tr>
            </table>
        </div>

        <a-textarea cols="30" rows="10" :value="JSON.stringify(formList)" @change="edit"></a-textarea>

        
        <a-button @click="onSubmit" type="primary">提交</a-button>
        <a-button @click="onClear" type="danger">清空</a-button>
    </div>
</template>

<script>
import antForm from '../../components/ant-form/ant-form.vue'
import { formList, rules } from './form.js'
export default {
    components: {
        antForm
    },
    data() {
        return {
            form: {
                name: '何志军'
            },
            formList,
            rules,
        };
    },
    methods: {
        onClear() {
            console.log(this.$refs.form.reset())
        },
        onSubmit() {
            this.$refs.form.submit(msg => {
                if(msg) return this.$message.error(msg);
                alert('成功提交');
            });
        },
        edit(v) {
            this.formList = JSON.parse(v.target.value);
        }
    }
}
</script>

<style lang="less" scoped>
.form{
    background: #fff;
    padding: 30px;
    color: #333;
}

.body{
    word-break: break-all;
    display: flex;
    > form{
        flex: 1;
    }
}

.content{
    background: #fff;
    color: #333;
    padding: 20px;
    td{
        padding: 10px;
    }
}

textarea{
    color: #000;
}
</style>