import Vue from 'vue'
import { message } from 'ant-design-vue'
import router from '@/router';
import loadingCom from '@/components/loading/index.vue';
let reqNum = 0;

/**
 * 开始loading
 * 合并300ms内的请求(loading)
 * 结束loading
 * 错误统一处理 
 * 跳转登录页
 * 提示错误的弹框
 * 将某个.vue组件挂载到根节点：
 *  loading: {
 *      el: el, // 开始加载动画
 *      start: false, // 开始加载动画
 *      end: false, // 是否关闭动画
 *  }
 */

export default {
    _eles: [],
    _loadDoms: [],

    // 开始loading
    startLoading(obj) {
        if (reqNum === 0) {
            const el = obj.el;
            if (obj.start == true || el) {
                // 加载中组件
                const Task = Vue.extend(loadingCom), taskvm = new Task();
                // 给组件传参
                taskvm.type = obj.type || '';
                if(obj.text) taskvm.text = obj.text;
                // 获取组件元素
                const loadDom = taskvm.$mount().$el;
                // 插入节点
                if (typeof el == 'object') {
                    if (el.length) { // 多个节点
                        let arr = [];
                        for (let i = 0; i < el.length; i++) {
                            const dom = loadDom.cloneNode(true);
                            arr.push(dom);
                            el[i].appendChild(dom);
                        }
                        this._loadDoms = arr;
                        this._eles = [...el];
                    } else { // 单个节点
                        el.appendChild(loadDom);
                        this._loadDoms = [loadDom];
                        this._eles.push(el);
                    }
                } else if(obj.start == true) {
                    let bdy = document.body;
                    bdy.appendChild(loadDom);
                    this._eles.push(bdy);
                    this._loadDoms = [loadDom];
                }
            }
        }
        if (obj.start == true || obj.el) reqNum++;
    },

    // 合并300ms内的请求
    endLoading(obj) {
        let st = setTimeout(() => {
            this.closeLoading(obj);
            clearTimeout(st);
        }, 300);
    },

    // 结束loading
    closeLoading(obj) {
        if (!obj.start && !obj.el && obj.end == undefined) return;
        if(reqNum > 0) reqNum--;
        const loadingEnd = (obj || {}).end;
        if (reqNum === 0 && this._loadDoms.length && loadingEnd != false) {
            console.log('结束loading', this._eles, this._loadDoms);
            for (let i = 0; i < this._loadDoms.length; i++) {
                this._eles[i].removeChild(this._loadDoms[i]);
            }
            this._loadDoms = this._eles = [];
        }
    },

    /** 
     * 错误统一处理 
     * @param {Number} status 请求失败的状态码
     */
    errStatus(response) {
        const status = response.status, data = response.data;
        switch (status) {
            case 403:
                // token过期,清除token并跳转登录页
                if(typeof data == 'string') this.tip(data);
                else this.tip('请求出错(403)')
                break;
            default: 
                if(data.error) this.tip(data.error + '（' + response.status + '）');
                else this.tip('请求出错（' + response.status + '）');
        }
    },

    /** 
     * 跳转登录页, 携带当前页面路由，以期在登录页面完成登录后返回当前页面
     */
    toLogin() {
        router.replace({
            path: '/login',
            query: {
                redirect: router.currentRoute.fullPath
            }
        });
    },

    // 提示错误的弹框
    tip(msg) {
        message.error(msg);
    }
}
