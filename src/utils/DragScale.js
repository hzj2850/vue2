/* 拖拽和缩放封装 */
function DragScale(o) {
    o = o || {};
    this.b = o.b || document.querySelector('html'); // 滑动范围
    this.t = o.t || document.querySelector('body'); // 滑动内容

    this.drag({
        oBox: this.t,
        tBox: this.t,
        change: o => {
            o.target.style.position = 'relative'
            o.target.style.userSelect = 'none'
            o.target.style.left = `${o.x}px`
            o.target.style.top = `${o.y}px`
        }
    })
    this.scale({
        oBox: this.t,
        tBox: this.t,
        minScale: 0.5,
        maxScale: 5,
        change: o => {
            o.target.style.position = 'relative'
            o.target.style.userSelect = 'none'
            o.target.style.left = o.x + 'px'
            o.target.style.top = o.y + 'px'
            o.target.style.transform = 'scale(' + o.scale + ')'
        }
    })
}

/*
 * 拖拽封装
 * @param {[object]} oBox [操纵范围元素]
 * @param {[object]} tBox [目标元素]
 * @param {[function]} change [实时回调]
 */
DragScale.prototype.drag = function (cfig = {}) {
    const b = cfig.oBox || document.querySelector('html'),
        t = cfig.tBox || document.querySelector('body');
    let ol = 0, ot = 0;
    const f = e => {
        e = e || window.event;
        cfig.change && cfig.change({ x: e.clientX + ol, y: e.clientY + ot, target: t });
        e.setCapture && e.setCapture();
        e.preventDefault && e.preventDefault();
        return false;
    }
    const fr = () => {
        this.removeEvent(b, 'mousemove', f);
        this.removeEvent(b, 'mouseup', fr);
        this.removeEvent(b, 'mouseleave', fr);
    }
    this.addEvent(b, 'mousedown', e => {
        e = e || window.event;
        ol = parseFloat(t.style.left || 0) - e.clientX;
        ot = parseFloat(t.style.top || 0) - e.clientY;

        this.addEvent(b, 'mousemove', f);
        this.addEvent(b, 'mouseup', fr);
        this.addEvent(b, 'mouseleave', fr);
    })
}

/*
 * 放大缩小方法封装
 * @param {[object]} oBox [操纵范围元素]
 * @param {[object]} tBox [目标元素]
 * @param {[object]} minScale [最小放大倍数]
 * @param {[object]} maxScale [最大放大倍数]
 * @param {[function]} change [实时回调]
 */
DragScale.prototype.scale = function (cfig = {}) {
    const min = cfig.minScale || 0.2,
        max = cfig.maxScale || 4,
        oBox = cfig.oBox || document.querySelector('div'), // 操作区域
        tBox = cfig.tBox || document.querySelector('div'); // 操作目标
    let scale = 1;

    const f = function (e) {
        // 判断放大还是缩小
        let ratio = 1.1; // 放大0.1
        if (e.deltaY > 0) ratio = 0.9; // 缩小0.1
        // 放大缩小倍数计算
        const _scale = scale * ratio;
        if (_scale > max) {
            ratio = max / scale;
            scale = max;
        } else if (_scale < min) {
            ratio = min / scale;
            scale = min;
        } else {
            scale = _scale;
        }
        // 计算偏移量（当鼠标在目标元素上时）
        let x = parseFloat(tBox.style.left || 0), y = parseFloat(tBox.style.top || 0);
        if (e.target.isSameNode(tBox)) {
            const z = ratio - 1;
            x -= (e.clientX - tBox.offsetLeft - tBox.offsetWidth * 0.5) * z;
            y -= (e.clientY - tBox.offsetTop - tBox.offsetHeight * 0.5) * z;
        }
        // 回调
        cfig.change && cfig.change({
            target: tBox,
            x: x.toFixed(4),
            y: y.toFixed(4),
            scale: scale.toFixed(5)
        })
        // 阻止滚动条
        e.preventDefault();
    }

    this.addEvent(oBox, 'mousewheel', f)
}

// 绑定事件封装
DragScale.prototype.addEvent = function (e, t, f) {
    if (e.attachEvent) e.attachEvent('on' + t, f);
    else e.addEventListener(t, f, false);
}

// 事件移除封装
DragScale.prototype.removeEvent = function (e, t, f) {
    if (e.detachEvent) e.detachEvent("on" + t, f);
    else if (e.removeEventListener) e.removeEventListener(t, f, false);
    else e["on" + t] = null;
};

export default DragScale
