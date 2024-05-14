// 表单校验组件
const fn3 = (h, e, c) => {
    return h('a-form-model-item', {
        attrs: {
            label: e.label,
            prop: e.key,
            'data-label': e.labelStyle,
        }
    }, c.slots.item(e));
}

// 元素内容渲染：slot > text
const fn2 = (e, o) => [e.slot && o[e.slot] ? o[e.slot](e) : e.text];

// 递归循环数组
const fn = (h, a, c) => a.map(e => e.tag ? h(e.tag, { ...(e.props || {}) }, e.children ? fn(h, e.children, c) : fn2(e, c.slots)) : fn3(h, e, c));

// 布局组件
export function render(h, c) {
    const list = c.parent.layout || [];
    const slots = { ...c.scopedSlots, ...c.parent.$scopedSlots };
    return fn(h, list, { ...c, slots });
}

// 表单组件
export function render2(h, c) {
    const item = c.props.item || {};
    const form = c.props.form || {};
    const props = item.props || {};
    if (!item.slot) return h('div', {}, '待配置');
    return h(item.slot, {
        ...props,
        attrs: {
            value: form[item.key],
            ...(props.attrs || {})
        },
        on: {
            change: v => c.parent.change(item, v),
            ...(props.on || {})
        }
    })
}

// 样式初始化
export const setStyle = function (el) {
    el.querySelectorAll('.ant-form-item').forEach(e => {
        const dom = e.querySelector('.ant-form-item-label');
        if (dom) dom.style = e.dataset.label;
    });
}

// 触发整个表单验证
export const validate = function (form, fn) {
    form.validate((a, b) => {
        if (a) {
            fn && fn();
        } else {
            const k = Object.keys(b)[0];
            const arr = b[k] || [];
            const obj = arr[0] || {};
            if (obj.message && fn) fn(obj.message);
            return false;
        }
    });
}
