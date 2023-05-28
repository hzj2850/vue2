import store from '@/store/index'
// 获取页面缩放比例
function initZoom() {
    var b = 1920; //设计稿宽度
    let w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth; // 当前窗口的宽度
    store.commit('SET_ZOOM', w / b);
}
// 初始化
initZoom();
// 改变窗口大小
window.onresize = initZoom;