// 3、自定义列的内容
const fn = function (h, props) {
    const { col, item, index, slots, value } = props;
    if (col.slot) return slots[col.slot] ? slots[col.slot]({ item, index }) : '插槽';
    if (col.wrap) return h(col.wrap, {}, [value]);
    return value;
}

// 2、创建列的虚拟dom
const colfn = function (h, props) {
    const { col, item, index } = props;
    const v = item[col.key], value = (v || v === 0) ? v : '';
    let obj = { class: 'td', value };
    if (col.customRender) obj = (col.customRender({ obj, item, index }) || obj);
    return h(col.tag || 'div', obj, [fn(h, { ...props, value: obj.value })]);
}

// 1、循环列
export const colMap = function (h, props) {
    const { columns, item, index, slots } = props;
    const slot = columns.customSlot ? columns.customSlot({ item, index }) : '';
    if (slot) return slots[slot] ? slots[slot]({ item, index }) : '插槽';
    return (columns.cols || []).map(col => colfn(h, { col, item, index, slots }));
}