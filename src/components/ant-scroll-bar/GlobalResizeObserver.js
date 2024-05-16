// https://blog.csdn.net/eadela/article/details/134930353

export const GlobalResizeObserver = (function () {
    const ATTR_NAME = 'global-resizeobserver-key';

    const attrValueToCallback = {};

    const o = new ResizeObserver((entries) => {
        for (const entry of entries) {
            const attrValue = entry.target.getAttribute(ATTR_NAME);
            if (attrValue) {
                const callback = attrValueToCallback[attrValue];
                if (typeof callback === 'function') {
                    callback(entry);
                }
            }
        }
    });

    return Object.freeze({
        observe(el, callback) {
            if (!(el instanceof Element)) {
                return alert('GlobalResizeObserver，无法观察到非Element。');
            }

            let attrValue = el.getAttribute(ATTR_NAME);
            if (!attrValue) {
                attrValue = String(Math.random());
                el.setAttribute(ATTR_NAME, attrValue);
            }

            attrValueToCallback[attrValue] = callback;
            o.observe(el);
        },

        unobserve(el) {
            if (!(el instanceof Element)) {
                return alert('GlobalResizeObserver无法取消观测非元素。');
            }
            const attrValue = el.getAttribute(ATTR_NAME);
            if (!attrValue) {
                return alert('GlobalResizeObserver无法取消观测不带ATTR_NAME的元素。');
            }
            delete attrValueToCallback[attrValue];
            o.unobserve(el);
        }
    });
})();
