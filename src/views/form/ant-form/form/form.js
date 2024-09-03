import moment from 'moment';

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

// 获取配置key
const getkey = (e) => {
    return e.key || ((e.item || {}).props || {}).prop;
}

// 更新表单
const setform = (_this, k, v) => {
    _this.$set(_this.form, k, v);
    _this.$emit('change', k, v);
}

// 设置日期
const setdate = (_this, v, e, k) => {
    const s = 'YYYY-MM-DD HH:mm:ss';
    if (v instanceof Array) {
        const a = v.map(f => f.format(s));
        if (e.start && e.end) {
            _this.$set(_this.form, e.end, a[1]);
            setform(_this, e.start, a[0]);
        } else {
            setform(_this, k, a);
        }
    } else {
        const r = v ? v.format(s) : '';
        setform(_this, k, r);
    }
}

// 回显日期
const getdate = (e, o) => {
    let k = getkey(e), v = o[k], s = 'YYYY-MM-DD HH:mm:ss';
    if (e.start && e.end) v = [o[e.start], o[e.end]].filter(f => f);
    if (v instanceof Array) {
        return v.map(f => moment(f, s));
    } else {
        return v ? moment(v, s) : undefined;
    }
}

// 是否禁用
export const getdis = (e, o) => {
    const f = e.disabled;
    if (typeof f === 'function') return f(o);
    return f || false;
}

// 值回显
export const getval = (e, o, t) => {
    const k = getkey(e);
    if (t === 4) {
        return getdate(e, o);
    } else {
        return o[k];
    }
}

// 获取配置placeholder
export const getpla = (e) => {
    return e.placeholder || undefined;
}

// 获取配置options
export const getopt = (e, o) => {
    const f = e.options || 'list', t = typeof f;
    if (t === 'string') return o[f] || [];
    if (t === 'function') return f(o);
    return f;
}

// 表单元素事件触发
export const change = (_this, ev, e, t) => {
    let k = getkey(e);
    if (t === 1) return setform(_this, k, ev.target.value);
    if (t === 2) return setform(_this, k, ev);
    if (t === 3) return setform(_this, k, ev.target.checked);
    if (t === 4) return setdate(_this, ev, e, k);
}
