import Vue from 'vue'
import Vuex from 'vuex'

import style from './module/style'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {}, // 当前登录用户信息
        zoom: 1, // 页面缩放倍数
    },
    mutations: {
        SET_USERINFO(state, userInfo) {
            state.userInfo = userInfo;
        },
        SET_ZOOM(state, v) {
            state.zoom = v;
        }
    },
    actions: {
    },
    modules: {
        style
    }
})
