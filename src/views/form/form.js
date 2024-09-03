import { setTable } from './ant-form/layout'

// 表单元素注释
export const form = {}

// 表单回显
export const setform = () => { }

// 表单提交
export const getform = () => { }

// 表单验证配置
export const rules = () => {
    return {
        input: [{ required: true, message: '请输入姓名', trigger: 'change' }],
        range: [{ required: true, message: '请选择日期范围', trigger: 'change' }],
    }
}

// 单行输入框
const fn1 = () => {
    return {
        slot: 'input',
        key: 'input',
        disabled: false,
        placeholder: '请输入姓名',
        item: {
            props: {
                label: '姓名',
                prop: 'input',
            }
        }
    }
}

// 多行输入框
const fn2 = () => {
    return {
        slot: 'textarea',
        key: 'textarea',
        disabled: false,
        placeholder: '请输入姓名',
        item: {
            attrs: {
                'data-label': 'width: 4em;'
            },
            props: {
                label: '备注'
            }
        }
    }
}

// 数字输入框
const fn3 = () => {
    return {
        slot: 'number',
        key: 'num',
        min: 1,
        max: 999,
        disabled: f => f.select == 2,
        placeholder: '请输入数字',
    }
}

// 下拉框（单选）
const fn4 = () => {
    return {
        slot: 'select',
        key: 'select',
        disabled: false,
        placeholder: '请输入数字',
    }
}

// 多选框（多个）
const fn5 = () => {
    return {
        slot: 'checkbox',
        key: 'checkbox',
        disabled: false,
        options: [
            { label: '中国', value: '中国' },
            { label: '日本', value: '日本' },
            { label: '美国', value: '美国' },
            { label: '英国', value: '英国' },
            { label: '法国', value: '法国' },
        ]
    }
}

// 多选框（单个）
const fn6 = () => {
    return {
        slot: 'checkbox2',
        key: 'checkbox2',
        disabled: false,
        text: '多选框（单个）',
    }
}

// 单选框（多个）
const fn7 = () => {
    return {
        slot: 'radio',
        key: 'radio',
        disabled: false,
        options: [
            { label: '中国', value: '中国' },
            { label: '日本', value: '日本' },
            { label: '美国', value: '美国' },
            { label: '英国', value: '英国' },
            { label: '法国', value: '法国' },
        ]
    }
}

// 单选框（单个）
const fn8 = () => {
    return {
        slot: 'radio2',
        key: 'radio2',
        disabled: false,
        text: '单选框（单个）',
    }
}

// 日期选择器
const fn9 = () => {
    return {
        slot: 'date',
        key: 'date',
        disabled: false,
        placeholder: '请选择测试日期',
    }
}

// 日期范围
const fn10 = () => {
    return {
        slot: 'range',
        key: 'range',
        disabled: false,
        placeholder: ['开始时间', '结束时间'],
        item: {
            props: {
                label: '测试日期',
                prop: 'range'
            }
        }
    }
}

// 日期范围
const fn11 = () => {
    return {
        slot: 'range',
        start: 'startDate',
        end: 'endDate',
        disabled: false,
        item: {
            props: {
                label: '检验日期',
                prop: 'startDate'
            }
        }
    }
}

// 自定义组件
const fn12 = () => {
    return {
        slot: 'title'
    }
}

// 表单布局
export const layout = () => {
    const o = {}
    return setTable([
        [
            { tag: 'td', obj: { style: 'width: 25%;' }, ...fn1(o) },
            { tag: 'td', obj: { style: 'width: 25%;' }, ...fn1(o) },
            { tag: 'td', obj: { style: 'width: 25%;' }, ...fn3(o) },
            { tag: 'td', obj: { style: 'width: 25%;' }, ...fn4(o) },
        ],
        [
            { tag: 'td', ...fn5(o) },
            { tag: 'td', ...fn6(o) },
            { tag: 'td', ...fn7(o) },
            { tag: 'td', ...fn8(o) },
        ],
        [
            { tag: 'td', ...fn9(o) },
            { tag: 'td', ...fn10(o) },
            { tag: 'td', ...fn11(o) },
            { tag: 'td', slot: 'title' },
        ],
        [
            { tag: 'td', ...fn2(o) },
        ]
    ], { attrs: { border: 1 } })
}
