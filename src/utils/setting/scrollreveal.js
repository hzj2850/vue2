// 爆布流：https://www.jqhtml.com/6913.html

import scrollReveal from 'scrollreveal';

const install = Vue => {
    const S = new scrollReveal({ reset: true });
    Vue.prototype.$scrollreveal = (c, o = {}) => S.reveal(c, o);
}

export default install
