<template>
    <div class="form_page">
        <div>{{ form }}</div>
        <my-form ref="form" :model="form" :rules="rules" :cfig="cfig" :hideRequiredMark="true" layout="horizontal" :labelCol="{span: 4}" :wrapperCol="{span: 20}">
            <MySelect v-model="form.selectId" :text.sync="form.selectName" :show-search="true" allowClear slot="selectId"></MySelect>
            <MyDate v-model="form.time" slot="time"></MyDate>
            <MyDate v-model="form.date" slot="date"></MyDate>
            <MyDate v-model="form.month" mode="month" format="M月" vformat="M" slot="month"></MyDate>
            <MyDate v-model="form.year" mode="year" format="YYYY年" vformat="YYYY" slot="year"></MyDate>
            <MyRange v-model="form.startTime" :end.sync="form.endTime" slot="startTime"></MyRange>
            <MyUpload :upload="bindUplad" slot="imgs">上传图片</MyUpload>
        </my-form>

        <a-button @click="onSubmit()">提交</a-button>
        <a-button @click="resetFields()">清空</a-button>

    </div>
</template>

<script>
import MySelect from '@/components/my-ant/my-select.vue'
import MyDate from '@/components/my-ant/my-date.vue'
import MyRange from '@/components/my-ant/my-range.vue'
import MyUpload from '@/components/my-ant/my-upload.vue'
import MyForm from '../../components/my-ant/my-form.vue'
export default {
    components: {
        MySelect,
        MyDate,
        MyRange,
        MyUpload,
        MyForm,
    },
    data() {
        return {
            form: {},
            // 样式配置
            cfig: {
                selectId: {
                    props: {
                        label: '姓名',
                        labelAlign: 'left',
                    },
                    class: {
                        'data-type': true
                    },
                    style: {
                        'border': '1px solid blue',
                        'color': '#fff',
                    }
                },
                imgs: {
                    props: {
                        wrapperCol: {span: 24}
                    }
                }
            },
            // 规则配置
            rules: {
                selectId: [{ required: true, message: '下拉框必选', trigger: 'change' }],
                date: [{ required: true, message: '日历必须', trigger: 'change' }],
                month: [{ required: true, message: '月份必须', trigger: 'change' }],
                time: [{ required: true, message: 'time必须', trigger: 'change' }],
                year: [{ required: true, message: '年份必须', trigger: 'change' }],
                startTime: [{ required: true, message: '时间段', trigger: 'change' }],
                imgs: [{ required: true, message: '图片必填', trigger: 'change' }],
            },
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
            this.$refs.form.validate((valid, msg) => {
                if (valid) {
                    alert('提交成功');
                } else {
                    alert(msg);
                }
            });
        },
        resetFields() {
            this.form = {};
            this.$refs.form.resetFields()
        },
        // 上传图片
        bindUplad(o) {
            // let data = new FormData();
            // data.append("file", o.file);
            // data.append("type", 1);
            this.$loading('上传中');
            console.log('上传图片：',o);
            return this.$userApi.fastmock().then(res => {
                this.$loading(false);
                if(this.form.imgs) {
                    this.form.imgs.push(res);
                } else {
                    this.form = {...this.form, imgs: [res]};
                }
            });
        },
    }
}
</script>

<style lang="less" scoped>
.my-form{
    background: rgba(255,255,255,0.1);
    padding: 30px;
    width: 60%;
    min-width: 600px;
    margin: auto;
    font-size: 18px;
}

.my-upload{
    color: #fff;
    line-height: 40px;
    background: #ccc;
}
</style>
