import { getShow, exIcon, ckIcon } from './tree'

// 数据渲染
const fn = (h, c, o, e) => {
    const item = o.e.item || {};
    const index = o.i;
    const slots = { ...c.scopedSlots, ...c.parent.$scopedSlots };
    if (e.slot && slots[e.slot]) return slots[e.slot]({ ...o.e, index });

    const value = e.customRender ? e.customRender({ ...o.e, index, expand: () => exIcon(h, c, o.e), check: () => ckIcon(h, c, o.e) }) : item[e.key];
    if (typeof value == 'object') return [h('span', {
        style: value.style,
        attrs: {
            class: value.class,
        },
    }, value.value)];
    return [h('span', {}, value)];
}

// 列循环
const colMap = (h, c, o, a, b = []) => {
    const cols = a || c.parent.columns;
    for (let e of cols) {
        if ((e.child || []).length > 0) colMap(h, c, o, e.child, b);
        else b.push(h('td', {}, fn(h, c, o, e)));
    }
    return b;
}

// 行循环
const rowMap = (h, c, a) => {
    const keys = c.parent.expandRowKeys;
    return a.map((e, i) => {
        return h('tr', {
            attrs: {
                hidden: !getShow(keys, e)
            }
        }, colMap(h, c, { e, i }));
    });
}

export const tbodyRender = (h, c) => {
    const a = c.parent.list || [];
    return h('tbody', {}, rowMap(h, c, a));
}