export const formList = [
    {
        label: '单选框',
        labelStyle: 'width: 5em;',
        slot: 'radio',
        key: 'rType',
        // options: [],
        // callback(obj) {
        //     console.log(this, obj);
        // },
    },
    {
        label: '多选框',
        slot: 'checkbox',
        key: 'checkbox',
        // options: [],
        // callback() { },
    },
    {
        label: '日期',
        slot: 'date',
    },
    {
        label: '月份',
        slot: 'month',
    },
    {
        label: '时间段',
        slot: 'range',
    },
    {
        label: '星期',
        slot: 'week',
    },
    {
        label: '输入框',
        slot: 'input',
    },
    {
        label: '数字输入框',
        slot: 'number',
        key: 'num',
    },
    {
        label: '下拉框',
        slot: 'select',
    },
]

export const rules = {
    rType: [{ required: true, message: '单选框必选', trigger: 'change' }],
    checkbox: [{ required: true, message: '多选框必选', trigger: 'change' }],
    num: [
        { required: true, message: '数字不能为空', trigger: 'change' },
        { min: 3, max: 5, message: '请输入3到5之间的值', trigger: 'change' },
    ],
}

// 样式初始化
export const setStyle = function (that) {
    const doms = that.$el.querySelectorAll('.ant-form-item');

    for (let i = 0; i < doms.length; i++) {
        const str = (that.formList[i] || {}).labelStyle;
        if (str) doms[i].querySelector('.ant-form-item-label').style = str;
    }
}

// 提交表单验证
export const submitFn = function (that, fn) {
    that.$refs.ruleForm.validate((a, b) => {
        if (a) {
            fn && fn();
        } else {
            const k = Object.keys(b)[0], arr = b[k] || [], obj = arr[0] || {};
            if (obj.message) that.$message.warning(obj.message);
            return false;
        }
    });
}
