import axios from './axios/index';

export default {
    // 获取当前登录用户信息
    getUserInfo(obj, cfig) {
        return axios.get('/api/sys/getUser', obj, cfig);
    },
    fastmock(obj) {
        return axios.post('https://www.fastmock.site/mock/1fb165a25fe590431223ccaa6ebcc0ce/vue/api/user', obj);
    },
}