<template>
    <div class="form_page">
        <div>{{ form }}</div>

        <a-form-model ref="ruleForm" :model="form" :rules="rules">
            <a-form-model-item label="下拉框" prop="selectId" hasFeedback>
                <MySelect v-model="form.selectId" :text.sync="form.selectName" :show-search="true"></MySelect>
            </a-form-model-item>
            <a-form-model-item label="日期" prop="date" hasFeedback>
                <MyDate v-model="form.date"></MyDate>
            </a-form-model-item>
            <a-form-model-item label="时间段" prop="startTime" hasFeedback>
                <MyRange v-model="form.startTime" :end.sync="form.endTime"></MyRange>
            </a-form-model-item>
        </a-form-model>

        <a-button @click="onSubmit()">提交</a-button>
        <a-button @click="resetForm()">清空</a-button>
    </div>
</template>

<script>
import MySelect from '@/components/my-ant/Select/index.vue'
import MyDate from '@/components/my-ant/DatePicker/index.vue'
import MyRange from '@/components/my-ant/DatePicker/range.vue'
export default {
    components: {
        MySelect,
        MyDate,
        MyRange,
    },
    data() {
        return {
            form: {},
            rules: {
                selectId: [{ required: true, message: '下拉框必选', trigger: 'change' }],
                date: [{ required: true, message: '日历必须', trigger: 'change' }],
                startTime: [{ required: true, message: '时间段', trigger: 'change' }],
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this.form = { 
                date: "2023-03-26 13:40:58", 
                startTime: "2023-03-18 15:06:23", 
                endTime: "2023-04-14 15:06:23",
                selectId: 3 
            };
        }, 300);
    },
    methods: {
        // 提交
        onSubmit() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    alert('提交成功');
                } else {
                    console.log('请完善表单');
                }
            });
        },
        // 清空
        resetForm() {
            this.$refs.ruleForm.resetFields();
            this.$userApi.getUserInfo({
                name: '王二'
            }).then(res => {
                console.log('请求相应：' ,res)
            })
        },
    }
}
</script>

<style lang="less" scoped>
.form_page{
    color: #fff;
}

.ant-form{
    width: 50%;
    margin: 20px auto;
}

/deep/ .ant-form-item{
    display: flex;
    border: 1px solid rgba(250, 220, 220, 0.4);
    > .ant-form-item-label{
        width: 100px;
        > label{
            color: #fff;
        }
    }
    > .ant-form-item-control-wrapper{
        flex: 1;
    }
}
</style>
