import { mousemove } from './touch'

// 拖动滚动条
export const moveScrollBar = function (el, child) {
    let a = false, b = false, x = 0, y = 0;
    mousemove(child, document.body, (t, r) => {
        if (t === 1) {
            a = r.localName === 'td' || r.localName === 'th';
            // b = r.className.includes('fixed');
            x = el.scrollLeft;
            y = el.scrollTop;
        } else if (t === 2) {
            if (a) el.style.userSelect = 'none';
            if (a && !b) el.scrollTo(x - r.l, y - r.t);
            if (a && b) el.scrollTop = y - r.t;
        } else {
            el.style.userSelect = 'auto';
        }
    });
}

// 设置左右阴影
const setShadow = function (el) {
    // 左
    if (el.scrollLeft === 0) {
        el.classList.remove('left-shadow');
    } else {
        el.classList.add('left-shadow');
    }

    // 右
    if (el.scrollWidth - el.scrollLeft === el.clientWidth) {
        el.classList.remove('right-shadow');
    } else {
        el.classList.add('right-shadow');
    }
}

// 滚动监听
export const ScrollFn = function (el) {
    const isBar = el.scrollWidth > el.offsetWidth;
    isBar && setShadow(el);
    el.onscroll = () => {
        isBar && setShadow(el);
        // if (el.scrollHeight - el.scrollTop === el.clientHeight) {
        //     console.log('到底了')
        // }
    }
}