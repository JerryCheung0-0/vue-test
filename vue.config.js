const path = require('path')
const port = 8888
const name = 'vue test' // page title

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    devServer: {
        port: port,
        open: true,
        // 代理 webpack-dev-server
        proxy: {
            '/api': {
                target: 'http://localhost:' + port,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/mock'
                }
            }
        }
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        // 设置了可以使用ide上的js debug，需要下载google插件 vue-devtool
        devtool: 'source-map',
        resolve: {
            alias: {
                '@': resolve('src'),
                '@css': resolve('src/assets/css'),
                '@image': resolve('src/assets/image')
            }
        }
    }
}
