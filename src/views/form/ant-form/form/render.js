// 元素内容渲染：slot > text
const fn = (c, e) => {
    const a = { ...c.scopedSlots, ...c.parent.$scopedSlots };
    const k = e.slot, f = a[k], v = e.text || '';
    if (k) return f ? f(e) : JSON.stringify(e);
    if (typeof v === 'function') return v(c.props);
    return v;
}

// 表单校验组件
const fn2 = (h, c, e) => h('a-form-model-item', { ...e.item }, fn(c, e));

// 配置顺序：child > item > slot > text
const fn3 = (h, c, e, f) => (e.child || []).length ? f(h, c, e.child) : e.item ? fn2(h, c, e) : fn(c, e);

// 递归循环数组
const map = (h, c, a, b = []) => {
    for (let i = 0; i < a.length; i++) {
        const e = a[i], t = e.tag, o = e.obj || {};
        if (t) b.push(h(t, { ...o }, [fn3(h, c, e, map)]));
        else b.push(fn3(h, c, e, map));
    }
    return b;
}

// 布局表单组件
export function formRender(h, c) {
    const a = c.props.layout || [], model = c.props.form || {}, rules = c.props.rules || {}, size = c.props.size;
    return h('a-form-model', { attrs: { size }, props: { model, rules }, ref: 'form' }, map(h, c, a));
}
