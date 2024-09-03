// 去掉文本的选中状态
const removeSelection = () => {
    if (window.getSelection) { // 标准浏览器
        var selection = window.getSelection();
        if (selection.rangeCount > 0) {
            selection.removeAllRanges(); // 清除所有选区
        }
    } else if (document.selection) { // IE < 9
        document.selection.empty();
    }
}

// 拖动表格
export const setMove = (ev) => {
    const el = ev.target;
    const box = el.querySelector('.ant-table-wrapper');
    const ta = el.querySelector('.ant-table-body');
    const hd = el.querySelector('.ant-table-header');
    const lbox = el.querySelector('.ant-table-fixed-left');
    const rbox = el.querySelector('.ant-table-fixed-right');
    const setStyle = () => {
        lbox.style.boxShadow = ta.scrollLeft <= 0 ? 'none' : '6px 0 6px -4px rgba(0, 0, 0, 0.15)';
        rbox.style.boxShadow = (ta.scrollLeft >= ta.scrollWidth - ta.clientWidth) ? 'none' : '-6px 0 6px -4px rgba(0, 0, 0, 0.15)';
    }
    setStyle();
    ta.onscroll = () => setStyle();
    if (ta.scrollWidth > ta.clientWidth) {
        var difl = 0, dift = 0;
        box.onmousedown = (j) => {
            const e = j || window.event;
            difl = e.clientX; dift = e.clientY;
            if (e.target.localName === 'td' || e.target.localName === 'th') {
                removeSelection();
                var x = 0, y = 0;
                box.onmousemove = (f) => {
                    box.style.cursor = 'move';
                    box.style.userSelect = 'none';
                    const r = f || window.event;
                    if (x || y) {
                        ta.scrollLeft -= (r.clientX - x);
                        ta.scrollTop -= (r.clientY - y);
                    }
                    x = r.clientX; y = r.clientY;
                    hd.scrollLeft = ta.scrollLeft;
                    r.stopPropagation && r.stopPropagation();
                    r.preventDefault && r.preventDefault();
                    return false;
                }

                box.onmouseleave = () => {
                    box.onmousemove = null;
                }
            }
        }

        box.onmouseup = (e) => {
            el.setAttribute('dif', box.style.cursor === 'move' || Math.abs(e.clientX - difl) > 5 || Math.abs(e.clientY - dift) > 5);
            box.style.cursor = 'auto';
            box.style.userSelect = 'auto';
            box.onmousemove = null;
        }
    } else {
        box.style.cursor = 'auto';
        box.style.userSelect = 'auto';
        el.setAttribute('dif', false);
        box.onmousedown = null;
        box.onmousemove = null;
        box.onmouseleave = null;
        box.onmouseup = null;
    }
}

// 文本加一层外壳
export const getcols = (a, b = []) => {
    for (let i = 0; i < a.length; i++) {
        const e = a[i];
        if (e.scopedSlots) {
            b.push(e);
        } else {
            b.push({ ...e, scopedSlots: { customRender: e.ellipsis ? "ellipsis" : 'text' } });
        }
    }
    return b;
}

// 多选框
export const onCheck = function (e) {
    const obj = this.rowSelection || {};
    let arr = [...(obj.selectedRowKeys || [])];
    const key = this.rowKey(e);
    const idx = arr.indexOf(key);
    if (idx === -1) arr.push(key);
    else arr.splice(idx, 1);
    const list = this.dataSource.filter(f => arr.indexOf(this.rowKey(f)) >= 0);
    obj.onChange && obj.onChange(arr, list);
}

// 多选框是否选中
export const getCheck = function (e) {
    const arr = (this.rowSelection || {}).selectedRowKeys || [];
    const key = this.rowKey(e);
    return arr.includes(key);
}

// 判断鼠标是否有位移差
export const getdif = function () {
    return this.$el.getAttribute('dif') === 'true';
}
