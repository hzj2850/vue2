function DragScale (bar, ele, params) {
    this.bar = bar; // 滑动范围
    this.ele = ele; // 滑动的内容
    this.params = params || {
		zoomVal: 1, // 初始缩放比例
		minZoomVal: 0.2, // 最小缩放比例
		left: 0, // 初始左边距
		top: 0, // 初始上边距
		currentX: 0, // 鼠标X坐标
		currentY: 0, // 鼠标Y坐标
		moveVal: 50, // 上下左右移动距离
		wheelVal: 1200, // 放大缩小的值
		flag: false, // 标记鼠标按下或松开
	}
}

// 获取样式
DragScale.prototype.getCss = function (key) {
    //兼容ie的currentStyle和其他浏览器支持的getComputedStyle方法
    const o = this.ele;
    return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key];
};

// 拖动盒子
DragScale.prototype.drag = function(callback) {
    this.bar.style.cursor = 'move';
    const _that = this;
    this.bar.onmousedown = function(event) {
        _that.params.flag = true;
        // 获取盒子距离浏览器可视窗口的水平距离和垂直距离
        const l = _that.getCss("left");
        const t = _that.getCss("top");
        if (l !== "auto") _that.params.left = l;
        if (t !== "auto") _that.params.top = t;
        // 获取鼠标距离可以滑动区域的水平位置和垂直位置
        if (!event) {
            event = window.event;
            //防止IE文字选中
            _that.bar.onselectstart = function () {
                return false;
            }
        }
        const e = event;
        _that.params.currentX = e.clientX;
        _that.params.currentY = e.clientY;

        // 绑定一个鼠标移动事件
        _that.bar.onmousemove = function (event) {
            var e = event ? event : window.event;
            if (_that.params.flag) {
                // 运动拖动的盒子
                _that.ele.style.left = parseInt(_that.params.left) + (e.clientX - _that.params.currentX) + "px";
                _that.ele.style.top = parseInt(_that.params.top) + (e.clientY - _that.params.currentY) + "px";

                if (typeof callback == "function") callback(_that.params);
                if (event.preventDefault) {
                    event.preventDefault();
                }
                return false;
            }
        };
        // 为盒子绑定一个鼠标移出事件, 使箱子停止移动
        _that.bar.onmouseup = function () {
            _that.params.flag = false;
            _that.bar.onmousemove = null;
            _that.bar.onmouseup = null;
        };
    };

    
    // 开启鼠标滚动监听
    _that.bar.onmouseover = function() {
        if(!_that.bar.onmousewheel) _that.bar.onmousewheel = function() {
            _that.scale();
            return false;
        }
    }

    // 关闭所有事件
    _that.bar.onmouseout = function() {
        _that.params.flag = false;
        _that.bar.onmousemove = null;
        _that.bar.onmouseup = null;
        _that.bar.onmousewheel = null;
    }
}

// 缩放
DragScale.prototype.scale = function(mark = 0) {
    var wheelVal = [event.wheelDelta, this.params.wheelVal, -this.params.wheelVal][mark]
    this.params.zoomVal += wheelVal / 1200
    if (this.params.zoomVal < this.params.minZoomVal) this.params.zoomVal = this.params.minZoomVal;
    this.ele.style.transform = "scale(" + this.params.zoomVal + ")";
}

export default DragScale;
