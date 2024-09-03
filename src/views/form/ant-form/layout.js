// tag：生成的元素
// obj: 元素的配置
// child：生成子元素
// slot：插槽
// text：内容 
// item：表单元素配置

// 我叫${input}$,性别${input}$，今年${input}$岁了。
export const setRow = (s = '', o = {}, obj = {}) => {
    const a = s.split('${'), b = [];
    for (let i = 0; i < a.length; i++) {
        const v = a[i];
        if (v.indexOf('}$') >= 0) {
            const f = v.split('}$');
            if (f[0]) b.push({ slot: f[0], item: o[i] || {} });
            if (f[1]) b.push({ tag: 'span', text: f[1] });
        } else {
            if (v) b.push({ tag: 'span', text: v });
        }
    }
    return [{ tag: 'div', obj, child: b }];
}

// 表格table
export const setTable = (a = [], o = {}) => {
    return [{
        tag: 'table',
        obj: { style: "width: 100%;", ...o },
        child: a.map(e => ({ tag: 'tr', child: e })),
    }]
}
