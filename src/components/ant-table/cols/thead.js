// 计算rowspan
const rowspan = (o, v = 0) => {
    for (let e of o) {
        if (e.child) return v + 1;
    }
    return v;
}

// 计算colspan
const colspan = (a, b = []) => {
    for (let e of a) {
        if (e.child) colspan(e.child, b);
        else b.push(e.title);
    }
    return b.length;
}

// 自定义列的内容
const fn = (e, c) => {
    if (e.slot) {
        const slots = c.parent.$scopedSlots;
        const key = e.slot + '_head';
        return slots[key] ? slots[key](e) : e.title;
    } else {
        return e.title;
    }
}

// 列循环
const colMap = (h, c, a) => {
    return a.map(e => h('td', {
        class: e.class,
        style: e.style,
        attrs: {
            rowspan: rowspan([e]),
            colspan: colspan([e]),
        },
    }, [fn(e, c)]))
}

// 行循环
const rowMap = (h, c, a, b = []) => {
    const arr = a.filter(v => v.child);
    const list = [].concat(...arr.map(e => e.child));
    if (list.length) rowMap(h, c, list, b);
    b.unshift(h('tr', {}, colMap(h, c, a)))
    return b;
}

export function headRender(h, c) {
    const a = c.parent.columns || [];
    return rowMap(h, c, a);
}
