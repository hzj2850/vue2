// title：表头名称
// key：取值
// class：添加类名
// style：添加样式
// child：多级表头
// slot：内容插槽


// 表格头部配置
export const columns = [
    {
        title: '全选',
        style: 'width: 3em;min-width: 3em;',
        customRender(v) {
            return {
                value: [v.check()]
            }
        }
    },
    {
        title: '序号',
        class: 'fixed fix-last',
        style: 'min-width: 6em;left: 0;',
        customRender(v) {
            return {
                value: [v.expand(), v.index + 1]
            }
        }
    },
    {
        title: '姓名',
        key: 'name',
        style: 'min-width: 12em;',
    },
    {
        title: '年龄',
        key: 'age',
        style: 'min-width: 1000px;',
        child: [
            {
                title: '年龄1',
                key: 'age',
            },
            {
                title: '年龄2',
                key: 'age',
                child: [
                    {
                        title: '111',
                        key: 'name',
                    },
                    {
                        title: '222',
                        key: 'name',
                    },
                ]
            },
        ]
    },
    {
        title: '性别',
        key: 'sex',
        style: 'min-width: 32em;',
        customRender: ({ item }) => {
            return {
                style: { color: item.sex == 1 ? '#0f0' : '#f0f' },
                value: item.sex == 1 ? '男' : '女',
            }
        }
    },
    {
        title: '操作',
        slot: 'action',
        class: 'fixed fix-first',
        style: 'min-width: 10em;right: 0;',
    },
];

// 列表数据
export const listData = [
    { name: '王二', age: 23, sex: 1, id: 1 },
    { name: '小红', age: 23, sex: 0, id: 2 },
    { name: '张三', age: 23, sex: 1, id: 3 },
    {
        name: '李四', age: 23, sex: 2, id: 4, children: [
            { name: '111', age: 11, sex: 1, id: 5 },
            { name: '111', age: 11, sex: 1, id: 6 },
            { name: '111', age: 11, sex: 1, id: 7 },
        ]
    },
    { name: '小红', age: 23, sex: 0, id: 2 },
]
