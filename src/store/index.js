import Vue from 'vue'
import Vuex from 'vuex'

import style from './module/style'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {}, // 当前登录用户信息
        keepAliveArr: [], // 需要缓存的组件（根据组件名称name缓存）
    },
    mutations: {
        SET_USERINFO(state, userInfo) {
            state.userInfo = userInfo;
        },
        // 缓存数组中添加元素（重复字符串不添加）
        SET_PUSH_KEEPALIVE(s, v) {
            if(!s.keepAliveArr.includes(v)) s.keepAliveArr.push(v);
        },
        // 删除缓存数组中的元素
        SET_DEL_KEEPALIVE(s, v) {
            const i = s.keepAliveArr.findIndex(r => r === v);
            if(i >= 0) s.keepAliveArr.splice(i, 1);
        },
    },
    actions: {
    },
    modules: {
        style
    }
})
