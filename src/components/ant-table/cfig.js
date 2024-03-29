import { rowMap, colsMap } from './map'

const fn = (a, b = []) => {
    for (let e of a) {
        if (e.child) fn(e.child, b);
        else b.push(e);
    }
    return b;
}

const rowHeadMap = (cols, b = []) => {
    b.push({
        tag: 'tr',
        child: colsMap(cols, {}, { td: 'th' }),
    })
    const arr = cols.filter(v => v.child);
    if (arr.length) {
        rowHeadMap([].concat(...arr.map(e => e.child)), b);
    }
    return b;
}

// 1、渲染表格最外层
export const setData = function (self) {
    let list = self.listdata, cols = self.columns, cfig = {};
    // 给每行添加点击事件
    if (self.$listeners['row']) cfig.click = self.$listeners['row'];
    return [
        {
            tag: 'table',
            child: [
                {
                    tag: 'thead',
                    child: rowHeadMap(cols),
                },
                {
                    tag: 'tbody',
                    child: rowMap(list, fn(cols), cfig),
                }
            ]
        }
    ];
}
