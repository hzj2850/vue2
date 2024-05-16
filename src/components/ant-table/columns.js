// title：表头名称
// key：取值
// class：添加类名
// style：添加样式
// child：多级表头
// slot：内容插槽


// 表格头部配置
export const columns = [
    {
        title: '序号',
        class: 'fixed fix-last',
        style: 'min-width: 6em;left: 0;',
        slot: 'jj',
        customRender: res => {
            console.log(res, 'jjjjjjj')
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
        customRender: res => {
            console.log(res, 'jjjjj1111')
        },
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
    { name: '王二', age: 23, sex: 1 },
    { name: '小红', age: 23, sex: 0 },
    { name: '张三', age: 23, sex: 1 },
    { name: '李四', age: 23, sex: 2 },
]
