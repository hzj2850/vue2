// 防抖:多次触发事件后，事件处理函数只执行一次，并且是在触发操作结束时执行。
export function debounce(fn, delay) {
    let timer = null, delay = delay || 200;
    return function () {
        var th = this;
        timer && clearTimeout(timer);
        timer = setTimeout(function () {
            timer = null;
            fn.apply(th, arguments);
        }, delay);
    };
}
// 节流:触发函数事件后，短时间间隔内无法连续调用，只有上一次函数执行后，过了规定的时间间隔，才能进行下一次的函数调用。
export function throttle(fn, interval) {
    let last = null, timer = null, interval = interval || 200;
    return function () {
        var th = this;
        var args = arguments;
        var now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                fn.apply(th, args);
            }, interval);
        } else {
            last = now;
            fn.apply(th, args);
        }
    };
}