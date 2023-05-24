// 多环境配置
const config = {

    // 开发环境
    development: {
        baseURL: 'http://192.168.71.73:9090/', // 默认接口请求路径
    },

    // 正式环境
    production: {
        baseURL: 'http://192.168.71.73:9090/',
    },

    // 测试环境
    test: {},

}

export default config[process.env.NODE_ENV] || {};
