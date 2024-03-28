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

// 4、表格内容配置
const colText = function (col, obj) {
    if (obj.item) return {
        content: col.customRender ? col.customRender(obj) : obj.item[col.key] || '',
        slot: col.scopedSlots,
    }
    return {
        content: col.title,
        slot: col.headRender,
    }
}

// 3、节点配置
const colObj = function (col, obj) {
    return {
        attrs: {
            fixed: col.fixed,
            rowspan: !obj.item ? rowspan([col]) : undefined,
            colspan: !obj.item ? colspan([col]) : undefined,
        },
        class: col.class,
        style: col.style + (col.customStyle && obj.item ? col.customStyle(obj) : ''),
    }
}

// 2、表格配置循环
export const colsMap = function (cols, obj, cfig) {
    return cols.map(col => ({
        tag: cfig.td || 'td',
        scope: obj,
        ...colText(col, obj),
        obj: colObj(col, obj),
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