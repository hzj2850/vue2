// title：表头名称
// key：取值
// class：添加类名
// rowspan：表格合并（表格布局专用）
// colspan：表格合并（表格布局专用）
// child：表格布局
// headRender：表头插槽
// scopedSlots：内容插槽


// 表格头部配置
export const columns = [
    {
        title: '序号',
        class: 'fixed fix-last',
        rowspan: 3,
        style: 'min-width: 6em;left: 0;background: #fff;',
        // style: 'width:0;left: 0;box-shadow:none;padding:0;',
        customRender: ({ index }) => {
            return index + 1;
        }
    },
    {
        title: '姓名',
        key: 'name',
        headRender: 'header',
        rowspan: 3,
        style: 'min-width: 12em;',
    },
    {
        title: 'age1',
        key: 'age',
        rowspan: 3,
        style: 'min-width: 12em;',
    },
    {
        title: 'age2',
        key: 'age',
        rowspan: 3,
        style: 'min-width: 12em;',
    },
    {
        title: '年龄',
        key: 'age',
        colspan: 3,
        style: 'min-width: 1000px;',
        child: [
            {
                title: '年龄1',
                key: 'age',
                rowspan: 2,
            },
            {
                title: '年龄2',
                key: 'age',
                colspan: 2,
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
        rowspan: 3,
        style: 'min-width: 32em;',
        customRender: ({ item }) => {
            const value = item.sex;
            return value == 0 ? '女' : value == 1 ? '男' : '未知';
        },
        customStyle: ({ item }) => {
            const value = item.sex;
            return `color: ${value == 0 ? '#0ff' : value == 1 ? '#0f0' : '#f0f'};`
        }
    },
    {
        title: '操作',
        scopedSlots: 'action',
        rowspan: 3,
        class: 'fixed fix-first',
        style: 'min-width: 10em;right: 0;background: #fff;',
    },
];

// 列表数据
export const listData = [
    { name: '王二', age: 23, sex: 1 },
    { name: '小红', age: 23, sex: 0 },
    { name: '张三', age: 23, sex: 1 },
    { name: '李四', age: 23, sex: 2 },
]
