// title：表头名称
// key：取值
// class：添加类名
// style：添加样式
// child：表格布局
// headRender：表头插槽
// scopedSlots：内容插槽


// 表格头部配置
export const columns = [
    {
        title: '序号',
        class: 'fixed fix-last',
        style: 'min-width: 6em;left: 0;background: #fff;',
        // style: 'width:0;left: 0;box-shadow:none;padding:0;',
        customRender: res => {
            if(res.item) res.content = res.index + 1;
            return res;
        }
    },
    {
        title: '姓名',
        key: 'name',
        headRender: 'header',
        style: 'min-width: 12em;',
        customRender: res => {
            if(res.index == 2) res.obj.attrs.colspan = 2;
            return res;
        }
    },
    {
        title: 'age1',
        key: 'age',
        style: 'min-width: 12em;',
        customRender: res => {
            if(res.index == 2) res.tag = null;
            return res;
        }
    },
    {
        title: 'age2',
        key: 'age',
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
            const t = res.content;
            if(res.item) {
                res.content = t == 0 ? '女' : t == 1 ? '男' : '未知';
                res.obj.style += `color: ${t == 0 ? '#0ff' : t == 1 ? '#f0f' : 'red'};`
            }
            return res;
        },
    },
    {
        title: '操作',
        scopedSlots: 'action',
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
