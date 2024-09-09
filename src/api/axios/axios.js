import axios from 'axios';

// 创建axios实例
const Axios = axios.create({ timeout: 1000 * 12 });
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
Axios.defaults.baseURL = process.env.VUE_APP_BASE_SYS;

// 请求拦截器
Axios.interceptors.request.use(
    config => {
        // 从缓存之中获取 token
        const token = localStorage.getItem('Hzt-Token');
        if (token) config.headers['Authorization'] = token;
        // ...
        return config;
    },
    error => Promise.error(error)
)

// 响应拦截器
Axios.interceptors.response.use(
    res => {
        if (res.status === 200 || res.status === 201) {
            return Promise.resolve(res.data);
        } else {
            return Promise.reject(res.data);
        }
    },
    error => {
        const { response } = error;
        if (response) {
            return Promise.reject(response);
        } else {
            console.error('请求超时或断网');
        }
    }
);

export default Axios;