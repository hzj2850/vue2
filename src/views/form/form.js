export function getLayout(_this) {
    console.log("layout:::::::::")
    return [{
        tag: 'table',
        props: {
            style: 'width: 100%',
            attrs: {
                border: _this.form.sex == 1 ? 1 : 0,
            }
        },
        children: [{
            tag: 'tr',
            children: [{
                tag: 'td',
                text: '用户头像',
                slot: 'userImg',
                props: {
                    style: 'width:200px;',
                    attrs: {
                        rowspan: 3
                    }
                }
            }, {
                tag: 'td',
                props: {
                    style: 'width: 25%;'
                },
                children: [{
                    label: '姓名',
                    key: 'name',
                    slot: 'ant-input',
                    props: {
                        attrs: {
                            placeholder: '请输入用户名称',
                            allowClear: true,
                        }
                    }
                }]
            }, {
                tag: 'td',
                props: {
                    style: 'width: 25%;'
                },
                children: [{
                    label: '性别',
                    key: 'sex',
                    slot: 'ant-radio',
                    props: {
                        attrs: {
                            options: [
                                { label: '男', value: 1 },
                                { label: '女', value: 2 },
                            ]
                        }
                    }
                }]
            }, {
                tag: 'td',
                text: '1111111'
            },]
        }, {
            tag: 'tr',
            children: [{
                tag: 'td',
                text: '1111111'
            }, {
                tag: 'td',
                text: '1111111'
            }, {
                tag: 'td',
                text: '1111111'
            },]
        }, {
            tag: 'tr',
            children: [{
                tag: 'td',
                text: '1111111'
            }, {
                tag: 'td',
                text: '1111111'
            }, {
                tag: 'td',
                text: '1111111'
            },]
        }, {
            tag: 'tr',
            children: [{
                tag: 'td',
                text: '1111111'
            }, {
                tag: 'td',
                text: '1111111'
            }, {
                tag: 'td',
                text: '1111111'
            }, {
                tag: 'td',
                text: '1111111'
            },]
        }, {
            tag: 'tr',
            children: [{
                tag: 'td',
                text: '1111111'
            }, {
                tag: 'td',
                text: '1111111'
            }, {
                tag: 'td',
                text: '1111111'
            }, {
                tag: 'td',
                text: '1111111'
            },]
        }, {
            tag: 'tr',
            children: [{
                tag: 'td',
                text: '1111111',
                props: {
                    attrs: {
                        colspan: 4
                    }
                },
                children: [{
                    label: '其他描述',
                    key: 'dirms',
                    slot: 'a-textarea',
                    props: {
                        attrs: {
                            placeholder: '请输入其他描述....',
                            allowClear: true,
                        },
                        on: {
                            change(v) {
                                _this.$set(_this.form, 'dirms', v.target.value);
                            }
                        }
                    }
                }]
            }]
        },]
    }]
}

export const rules = {
    name: [{ required: true, message: '姓名必填', trigger: 'change' }],
    IDCard: [{ required: true, message: '多选框必选', trigger: 'change' }],
    rType: [{ required: true, message: '单选框必选', trigger: 'change' }],
    gj: [{ required: true, message: '下拉框必选', trigger: 'change' }],
    dirms: [{ required: true, message: '描述不能为空', trigger: 'change' }],
}
