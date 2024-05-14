const setTable = (children) => {
    return {
        tag: 'table',
        props: {
            attrs: {
                border: 1
            },
            style: {
                width: '100%'
            }
        },
        children
    }
}
const setTr = v => ({ tag: 'tr', children: v });
const setTd = v => ({ tag: 'td', children: v });
export const formList = [
    setTable([
        setTr([
            setTd([{
                label: '姓名',
                key: 'name',
                slot: 'ant-input',
                props: {
                    attrs: {
                        placeholder: '请输入姓名',
                    }
                }
            }]),
            setTd([{
                label: '身份证',
                key: 'IDCard',
                slot: 'ant-checkbox',
            }]),
            setTd([{
                tag: 'div',
                slot: 's1',
                text: '自定义插槽'
            }]),
        ]),
        setTr([
            setTd([{
                label: '单选框',
                labelStyle: 'width: 6em;color: blue;',
                slot: 'ant-radio',
                key: 'rType',
                callback(v, fm) {
                    console.log('callback', v, fm)
                }
            }]),
            setTd([{
                label: '国籍',
                key: 'gj',
                slot: 'ant-select',
                props: {
                    attrs: {
                        placeholder: '请选择',
                        options: [
                            { label: "语文", value: '1' },
                            { label: "数学", value: '2' },
                        ]
                    }
                },
                callback(v, fm) {
                    const obj = this.props.attrs.options.find(f => f.value == v) || {};
                    fm.form['gj_name'] = obj.label;
                },
            }]),
            setTd([{

            }])
        ]),
    ]),
    // {
    //     label: '日期',
    //     slot: 'ant-date',
    // },
    // {
    //     label: '月份',
    //     slot: 'ant-month',
    // },
    // {
    //     label: '时间段',
    //     slot: 'ant-range',
    // },
    // {
    //     label: '星期',
    //     slot: 'ant-week',
    // },
    // {
    //     label: '输入框',
    //     slot: 'input',
    // },
    // {
    //     label: '数字输入框',
    //     slot: 'ant-number',
    //     key: 'num',
    // },
]

export const rules = {
    name: [{ required: true, message: '姓名必填', trigger: 'change' }],
    IDCard: [{ required: true, message: '多选框必选', trigger: 'change' }],
    rType: [{ required: true, message: '单选框必选', trigger: 'change' }],
    gj: [{ required: true, message: '下拉框必选', trigger: 'change' }],
}