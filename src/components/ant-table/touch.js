export const mousemove = function (a, b, fn) {
    if (!fn) return false;
    // 指定 offsetLeft 的父元素
    a.parentNode.style.position = 'relative';
    // 清除拖动事件
    const f = () => {
        b.onmousemove = null;
        b.onmouseup = null;
        b.onmouseleave = null;
        fn(3);
    }
    // 鼠标按下时
    a.onmousedown = e => {
        fn(1, e.target);
        b.onmousemove = r => {
            fn(2, {
                l: r.clientX - e.clientX - a.offsetLeft,
                t: r.clientY - e.clientY - a.offsetTop
            });
        }
        b.onmouseup = f;
        b.onmouseleave = f;
    }
}