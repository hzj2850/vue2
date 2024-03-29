// table布局时，计算rowspan
const rowspan = (o, v = 0) => {
    for (let e of o) {
        if (e.child) return v + 1;
    }
    return v;
}

// table布局时，计算colspan
const colspan = (a, b = []) => {
    for (let e of a) {
        if (e.child) colspan(e.child, b);
        else b.push(e.title);
    }
    return b.length;
}

// 自定义渲染
const customRender = (col, v) => col.customRender ? col.customRender(v) : v;

// 2、表格配置循环
export const colsMap = function (cols, obj, cfig) {
    return cols.map(col => customRender(col,{
        ...obj,
        tag: cfig.td || 'td',
        slot: obj.item ? col.scopedSlots : col.headRender,
        content: obj.item ? obj.item[col.key] : col.title,
        obj: {
            class: col.class,
            style: col.style,
            attrs: {
                rowspan: !obj.item ? rowspan([col]) : undefined,
                colspan: !obj.item ? colspan([col]) : undefined,
            },
        }
    }));
}

// 1、列表数据循环
export const rowMap = function (list, cols, cfig) {
    return list.map((item, index) => ({
        tag: cfig.tr || 'tr',
        child: colsMap(cols, { item, index }, cfig),
        obj: {
            attrs: {
                'data-index': index,
            }
        }
    }));
}