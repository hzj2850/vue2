// 表格头部配置
export const columns = {
    customSlot(r) {
        if (r.item.name == '张三') return 'one';
    },
    cols: [
        {
            title: '序号',
            key: 'order',
            tag: 'div',
            wrap: 'a',
            customRender: ({ obj, index }) => {
                const v = { ...obj };
                v.value = index + 1;
                v.style = 'color:red;';
                v.class = 'td fixed fix-last';
                return v;
            }
        },
        {
            title: '姓名',
            key: 'name',
        },
        {
            title: '年龄',
            key: 'age',
        },
        {
            title: '性别',
            key: 'sex',
        },
        {
            title: '操作',
            slot: 'action',
        },
    ]
}

// 列表数据
export const listdata = [
    { name: '王二', age: 23, sex: 1, key: 1 },
    { name: '小红', age: 12, sex: 0, key: 2 },
    { name: '张三', age: 35, sex: 1, key: 3 },
]
