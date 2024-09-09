import axios from './axios/index';

export default {
    getUsers(obj, cfig) {
        return axios.get('/users', obj, cfig);
    },
    add: (v) => axios.postJson('/users', v),
    del: (v) => axios.delete('/users/' + v),
    edit: (v) => axios.putJson('/users/' + v.id, v),
    getList(obj) {
        return axios.get('/userInfo', obj);
    },
}