<template>
    <div class="UserLogin">
        <div class="content">
            <div class="title">
                <span>用户登录</span>
                <i class="iconfont icon-a-dingbuyoushangjiaotubiao-3guanbi" @click="bindClose()"/>
            </div>
            <a-form-model class="form_content" ref="ruleForm" :model="form" :rules="rules" :label-col="{span: 6}" :wrapper-col="{span: 18}" hideRequiredMark>
                <a-form-model-item label="用户名（U）" prop="name">
                    <a-select v-model="form.name" show-search allowClear placeholder="请选择" option-filter-prop="children" :filter-option="filterOption" @change="handleChange" size="large">
                        <a-select-option value="jack"> Jack </a-select-option>
                    </a-select>
                </a-form-model-item>
                <a-form-model-item label="口令（P）" prop="password">
                    <a-input v-model="form.password" placeholder="请输入口令" allowClear size="large"/>
                </a-form-model-item>
            </a-form-model>
            <div class="footer">
                <my-btn text="确定（O）" :type="false?'default':'deongaree'" @callback="onSubmit()"  :limits="false"/>
                <my-btn text="取消（C）" :type="true?'default':'deongaree'"  @callback="bindClose()" :limits="false"/>
            </div>
        </div>
    </div>
</template>

<script>
import MyBtn from '@/components/svg/my-btn.vue'
export default {
    components: {
        MyBtn,
    },
    data() {
        return {
            form: {
                name: undefined,
                password: undefined,
            },
            rules: {
                name: [{ required: true, message: '请选择用户', trigger: 'change' }],
                password: [{ required: true, message: '请输入口令', trigger: 'change' }],
            },
        }
    },
    methods: {
        // 下拉框选中
        handleChange(value) {
            console.log(`selected ${value}`);
        },
        // 下拉框搜索
        filterOption(input, option) {
            return (
                option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
        },
        // 提交表单
        onSubmit() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    alert('submit!');
                    this.$router.go(-1);
                }
            });
        },
        // 取消登录
        bindClose() {
            this.$router.go(-1);
        },
    },
}
</script>

<style lang="less" scoped>
.UserLogin{
    position: relative;
}

.content{
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    width: 545px;
    height: 343px;
    background: rgb(3, 19, 75);
    border: 2px solid @border-color-base;
    box-shadow: inset 0px 1px 17px rgba(18, 142, 232, 0.35);
    border-radius: 10px;
}
.title{
    color: rgb(2, 197, 248);
    font-family: Microsoft YaHei;
    font-size: 24px;
    font-weight: 700;
    height: 64px;
    border-bottom: 1px solid @border-color-base;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > i{
        font-size: 25px;
        font-weight: 400;
        user-select: none;
        cursor: pointer;
    }
}

.form_content{
    margin: 30px 20px 0 20px;
    overflow: hidden;
    /deep/ .ant-form-item-label{
        text-align-last: justify;
        padding-right: 10px;
        > label{
            color: @text-color;
            font-size: 16px;
        }
    }
    /deep/ .ant-form-explain{
        height: 30px;
        line-height: 30px;
    }
    /deep/ .ant-form-item{
        margin-bottom: 30px;
    }
    /deep/ .ant-form-item-with-help{
        margin-bottom: 4px;
    }
    /deep/ .ant-select-selection, /deep/ .ant-input-affix-wrapper input{
        background: rgba(255, 255, 255, 0.08) !important;
        border-color: @text-color;
        color: #fff;
    }
    /deep/ .anticon{
        color: #999;
    }
}

.footer{
    display: flex;
    justify-items: center;
    justify-content: space-between;
    width: 70%;
    margin: 20px auto 0 auto;
}
</style>