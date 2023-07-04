
/**
 * axios封装
 * 请求拦截、响应拦截、
 */
import axios from 'axios';
import cfig from '../config';

// 创建axios实例
const Axios = axios.create({ timeout: 1000 * 12 });
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.client_id = 'd09ac9c797a743b88011916c3558615f';
Axios.defaults.baseURL = cfig.baseURL;

/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */
Axios.interceptors.request.use(
    config => {
        // 从缓存之中获取 token
        const userToken = localStorage.getItem('Hzt-Token');
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况  
        userToken && (config.headers.Authorization = userToken);
        return config;
    },
    error => Promise.error(error)
)

/** 
 * 响应拦截器 （每次请求后）
 */
Axios.interceptors.response.use(
    res => {
        if (res.status === 200) {
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
            alert("请求超时或断网");
        }
    }
);

export default Axios;