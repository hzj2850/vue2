const getNetworkIp = require('./src/utils/getNetworkIp');
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 打包时的引入js,css路径
    publicPath: process.env.VUE_APP_PUBLIC_PATH || '',
    // 构建时的输出目录
    outputDir: "dist",
    // 放置静态资源的目录
    assetsDir: "static",
    devServer: {
        open: true,
        host: getNetworkIp.networkIp,
        port: process.env.VUE_APP_PORT,
        https: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: process.env.VUE_APP_BASE_SYS + '',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            },
        }
    },
    // 开启eslint代码规范检测
    lintOnSave: true,
    chainWebpack: config => {
        // 设置本地地址变量
        config.resolve.alias
            .set('@', resolve('src'))
    },
    // 第三方插件配置 
    pluginOptions: {
        // 导入全局的less变量 
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                require('path').resolve('./src/assets/less/color.less'),
                require('path').resolve('./src/assets/less/layout.less'),
                require('path').resolve('./src/assets/less/animation.less'),
                require('path').resolve('./src/assets/icon/iconfont.css'),
            ]
        }
    }
};
