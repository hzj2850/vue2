/* 
    计算公式：内容可视区高度/内容实际区高度= 滑动条的高度/滑道高度=滚动条的顶部距离/实际内容区域顶部距离； 
*/

function MyScrollBar(cfig = {}) {
    this.oYBox = {}
    this.oYBar = {}
    this.oXBox = {}
    this.oXBar = {}

    this.ele = cfig.ele;

    this.box_width = 12
    this.bar_width = 6
    this.box_bg = 'rgba(0,0,0,0.1)'
    this.bar_bg = 'rgba(255,255,255,0.1)'
    this.active_bg = 'rgba(255,255,255,0.6)'

    // 添加滚动条
    this.addScrollBar();
    // 添加滚动监听
    this.scroll();
    // 更新滚动条位置
    this.resize();
    // 拖动x|y轴
    this.move_y_bar();
    this.move_x_bar();
}


MyScrollBar.prototype.get_x_box_t = function() {
    const el = this.ele;
    return Math.ceil(el.clientHeight + el.offsetTop - this.box_width)
}

MyScrollBar.prototype.get_x_bar_w = function() {
    const el = this.ele;
    return Math.ceil(el.clientWidth / el.scrollWidth * el.clientWidth)
}

MyScrollBar.prototype.get_y_l = function() {
    const el = this.ele;
    return Math.ceil(el.clientWidth + el.offsetLeft - this.box_width)
}

MyScrollBar.prototype.get_y_bar_h = function() {
    const el = this.ele;
    return Math.ceil(el.clientHeight / el.scrollHeight * el.clientHeight)
}

// 判断是否添加XY轴滚动条
MyScrollBar.prototype.addScrollBar = function () {
    if(this.ele.scrollHeight > (this.ele.innerHeight || this.ele.clientHeight)) {
        // Y轴滚动条盒子
        this.oYBox.ele = document.createElement('div');
        this.oYBox.ele.setAttribute('style', `
            position: fixed;
            left: ${this.get_y_l()}px;
            top: ${this.ele.offsetTop}px;
            width: ${this.box_width}px;
            height: ${this.ele.clientHeight}px;
            z-index: 1000;
            user-select: none;
            background:${this.box_bg};
        `)
        // Y轴滚动条
        this.oYBar.ele = document.createElement('div');
        this.oYBar.ele.setAttribute('style', `
            position: relative;
            left: calc((100% - ${this.bar_width}px) / 2);
            top:0;
            width:${this.bar_width}px;
            height: ${this.get_y_bar_h()}px;
            border-radius:${this.bar_width}px;
            background: ${this.bar_bg};`
        );
        this.oYBox.ele.appendChild(this.oYBar.ele);
        this.ele.appendChild(this.oYBox.ele);
    }
    if(this.ele.scrollWidth > (this.ele.innerWidth || this.ele.clientWidth)) {
        // X轴滚动条盒子
        this.oXBox.ele = document.createElement('div');
        this.oXBox.ele.setAttribute('style', `
            height:${this.box_width}px;
            width: ${this.ele.clientWidth}px;
            background: ${this.box_bg};
            position: fixed;
            left: ${this.ele.offsetLeft}px;
            top: ${this.get_x_box_t()}px;
            z-index: 1000;
            user-select: none;
        `)
        // X轴滚动条
        this.oXBar.ele = document.createElement('div');
        this.oXBar.ele.setAttribute('style', `
            width: ${this.get_x_bar_w()}px;
            height: ${this.bar_width}px;
            background: ${this.bar_bg};
            position: relative;
            left: 0px;
            top: calc((100% - ${this.bar_width}px) / 2);
            border-radius: ${this.bar_width}px;
        `);
        this.oXBox.ele.appendChild(this.oXBar.ele);
        this.ele.appendChild(this.oXBox.ele);
    }
}

// 滚动监听
MyScrollBar.prototype.scroll = function() {
    const that = this;
    this.addEvent(this.ele, 'scroll', e => {
        const el = e.target,
              oXBar = that.oXBar.ele,
              oYBar = that.oYBar.ele,
              x = Math.ceil(el.clientWidth / el.scrollWidth * el.scrollLeft),
              y = Math.ceil(el.clientHeight / el.scrollHeight * el.scrollTop);
        if(oXBar) oXBar.style.left = x + 'px';
        if(oYBar) oYBar.style.top = y + 'px';
    })
}

// 监听窗口变化
MyScrollBar.prototype.resize = function() {
    const that = this;
    this.addEvent(window, 'resize', () => {
        if(that.oYBox.ele) {
            that.oYBox.ele.style.left = that.get_y_l() + 'px';
            that.oYBox.ele.style.height = this.ele.clientHeight + 'px';
            this.oYBar.ele.style.height = that.get_y_bar_h() + 'px';
        }
        if(that.oXBox.ele) {
            that.oXBox.ele.style.top = this.get_x_box_t() + 'px';
            that.oXBox.ele.style.width = that.ele.clientWidth + 'px';
            that.oXBar.ele.style.width = that.get_x_bar_w() + 'px';
        }
    })
}
// 拖动Y轴
MyScrollBar.prototype.move_y_bar = function() {
    const bar = this.oYBar.ele, el = this.ele;
    bar && this.move_fn(bar, document, o => {
        el.scrollTop = Math.ceil(o.t / (el.clientHeight / el.scrollHeight));
    });
}
// 拖动X轴
MyScrollBar.prototype.move_x_bar = function() {
    const bar = this.oXBar.ele, el = this.ele;
    bar && this.move_fn(bar, document, o => {
        el.scrollLeft =  Math.ceil(o.l / (el.clientWidth / el.scrollWidth));
    });
}

// 绑定事件封装
MyScrollBar.prototype.addEvent = function(el, event, fn){  
    if (document.all) el.attachEvent('on' + event, fn);
    else el.addEventListener(event, fn, false);
}
// 事件移除封装
MyScrollBar.prototype.removeEvent = function(target, type, func){
    if (target.removeEventListener) target.removeEventListener(type, func, false);
    else if (target.detachEvent) target.detachEvent("on" + type, func);
    else target["on" + type] = null;
};
// 滑动事件封装
MyScrollBar.prototype.move_fn = function(ele, scope, callback) {
    let ol = 0, ot = 0, that = this, hover = null;
    const myFn = event => {
        ele.style.background = this.active_bg;
        ele.setCapture && ele.setCapture();
        event = event || window.event;
        callback && callback({ l: event.clientX - ol, t: event.clientY - ot });
    };
    const remove = () => {
        if(!hover) ele.style.background = this.bar_bg;
        that.removeEvent(scope, 'mousemove', myFn);
        that.removeEvent(scope, 'mouseup', remove);
        that.removeEvent(scope, 'mouseleave', remove);
        ele.releaseCapture && ele.releaseCapture();
    };
    this.addEvent(ele, 'mousedown', event => {
        event = event || window.event;
        ol = event.clientX - ele.offsetLeft;
        ot = event.clientY - ele.offsetTop;
        this.addEvent(scope, 'mousemove', myFn);
        this.addEvent(scope, 'mouseup', remove);
        this.addEvent(scope, 'mouseleave', remove);
        return false;
    });
    // 添加hover动画
    this.addEvent(ele, 'mouseover', () => {
        hover = true;
        ele.style.background = this.active_bg;
    });
    this.addEvent(ele, 'mouseout', () => {
        hover = false;
        ele.style.background = this.bar_bg;
    });
}

export default MyScrollBar


// const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
// // 创建MutationObserver实例，返回一个观察者对象
// const mutation = new MutationObserver(res => {
//     console.log(res,'jjjjjjjjjjjjjjjjj')
// })
// // 对观察者添加需要观察的元素，并设置需要观察元素的哪些方面
// mutation.observe(this.ele, {
//     // childList: true, // 子节点的变动（新增、删除或者更改）
//     attributes: true, // 属性的变动
//     characterData: true, // 节点内容或节点文本的变动

//     subtree: true, // 是否将观察器应用于该节点的所有后代节点
//     attributeFilter: ['class', 'style'], // 观察特定属性
//     attributeOldValue: true, // 观察 attributes 变动时，是否需要记录变动前的属性值
//     // characterDataOldValue: true // 观察 characterData 变动，是否需要记录变动前的值
// });


// MyScrollBar.prototype.getCss = function (key) {
//     //兼容ie的currentStyle和其他浏览器支持的getComputedStyle方法
//     const o = this.ele;
//     const s = o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key];
//     return s == 'auto' ? 0 : s;
// };