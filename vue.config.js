const path = require('path')
<<<<<<< HEAD
const MonocoEditorPlugin = require('monaco-editor-webpack-plugin')
=======

>>>>>>> dc20bf4fd672feb81dc3bb4f834cd8a262f8713a
const resolve = dir => {
    return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const BASE_URL = process.env.NODE_ENV === 'production' ?
    '/jj-vue-components/dist/' :
    '/jj-vue-components/dist/'

module.exports = {

    // Project deployment base
    // By default we assume your app will be deployed at the root of a domain,
    // e.g. https://www.my-app.com/
    // If your app is deployed at a sub-path, you will need to specify that
    // sub-path here. For example, if your app is deployed at
    // https://www.foobar.com/my-app/
    // then change this to '/my-app/'
    baseUrl: BASE_URL,
<<<<<<< HEAD
    configureWebpack: {
        node: {
            process: true,
        },
        plugins: [
            new MonocoEditorPlugin()
        ]
    },
=======

>>>>>>> dc20bf4fd672feb81dc3bb4f834cd8a262f8713a
    // 打包路径配置
    outputDir: './dist',

    // tweak internal webpack configuration.
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_c', resolve('src/components'))
    },
    // 打包时不生成.map文件
    // productionSourceMap: false
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    devServer: {
        port:3900,
        proxy: 'http://192.168.100.242:8080/app/mock/48'
    }
}
