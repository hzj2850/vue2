// 3、自定义列的内容
const fn2 = function (h, props) {
    const { col, item, index, slots } = props;
    if (col.slot) return slots[col.slot] ? slots[col.slot]({ item, index }) : '插槽';
    return h('span', {}, item[col.key] || '');
}

// 2、过滤表格配置
export const fn = (a, b = []) => {
    for (let e of a) {
        if (e.child) fn(e.child, b);
        else b.push(e);
    }
    return b;
}

// 1、循环列
export function colRender(h, c) {
    const { cols, item, index, slots, tag } = c.props;
    return fn(cols || []).map(col => h(tag || 'div', {
        class: col.class,
        style: col.style,
    }, [fn2(h, { col, item, index, slots, tag })]));
}
