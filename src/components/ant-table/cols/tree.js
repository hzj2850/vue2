// 获取所有子数据
const cfn = (a, k, k2, b = []) => {
    for (let e of a) {
        b.push(e[k]);
        if ((e[k2] || []).length > 0) cfn(e[k2], k, k2, b);
    }
    return b;
}

// 数据扁平化
export function format(a, k, k2, b = [], f = [], l = 0) {
    if (a && a.length) {
        for (let i = 0; i < a.length; i++) {
            const e = a[i], id = e[k];
            const f2 = [...f, id];
            const c = e[k2] || [];
            let item = { ...e };
            delete item[k2];
            b.push({ item, i, l, f: f2, c: cfn(c, k, k2) });
            if (c.length) format(c, k, k2, b, f2, l + 1);
        }
    }
    return b;
}

// 选中子元素
export const nextfn = (a, e) => {
    const v = e.f[e.l];
    if (e.c.length) {
        if (e.c.some(f => a.includes(f))) {
            const t = e.c.every(f => a.includes(f));
            for (let z of e.c) {
                const i = a.indexOf(z);
                if (t) a.splice(i, 1);
                if (!t && i < 0) a.push(z);
            }
        } else {
            a.splice(0, 0, ...e.c);
        }
    } else {
        const i = a.indexOf(v);
        i >= 0 ? a.splice(i, 1) : a.push(v);
    }
}

// 选中父元素
export const prevfn = (a, e, b) => {
    const v = e.f[e.l];
    if (e.c.length) {
        const t = e.c.some(f => a.includes(f));
        const i = a.indexOf(v);
        if (t && i < 0) a.push(v);
        if (!t && i >= 0) a.splice(i, 1);
    }
    const o = b.find(f => f.f[f.l] == e.f[e.l - 1]);
    if (o) prevfn(a, o, b);
}

// 多选框状态
export const getCheck = (a, e) => {
    if (e.c.length === 0 && a.includes(e.f[e.l])) return 2;
    if (e.c.some(f => a.includes(f))) return e.c.every(f => a.includes(f)) ? 2 : 3;
    return 1;
}

// 展开状态
export const getShow = (a, e) => {
    if (e.l === 0) return true;
    const b = a.filter(v => v !== e.f[e.l] && e.f.includes(v));
    if (b.length === e.l) return b.every(v => e.f.includes(v));
}

// 展开点击事件
export const onExpand = (a, e) => {
    if (e.c.length === 0) return;
    const v = e.f[e.l];
    const i = a.findIndex(f => f == v);
    if (i >= 0) a.splice(i, 1);
    else a.push(v);
}

// 创建展开按钮节点
export const exIcon = (h, c, e) => {
    const a = c.parent.expandRowKeys || [];
    if (e.c.length > 0) return h('i', {
        class: {
            iconfont: true,
            'icon-xiala': true,
            exIcon: true,
            exIconOpen: a.includes(e.f[e.l]),
        },
        on: {
            click: () => onExpand(a, e)
        }
    });
}

// 创建多选框节点
export const ckIcon = (h, c, e) => {
    const a = c.parent.selectRowKeys || [];
    const b = c.parent.list || [];
    const t = getCheck(a, e);
    return h('i', {
        class: {
            iconfont: true,
            iconcheck: true,
            'icon-check1': t == 1,
            'icon-check2': t == 2,
            'icon-check3': t == 3,
        },
        on: {
            click() {
                nextfn(a, e);
                prevfn(a, e, b);
            }
        }
    })
}
