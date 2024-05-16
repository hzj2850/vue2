// npm install resize-observer-polyfill
import ResizeObserver from 'resize-observer-polyfill';

// "use strict";
class observer {
    constructor(el) {
        this.el = el;
        this.callback = () => { };
        this.obs = new ResizeObserver(f => this.callback(f));
        this.obs.observe(this.el);
    }
    // 停止监听
    unobserve() {
        this.obs.unobserve();
    }
}

export default observer;