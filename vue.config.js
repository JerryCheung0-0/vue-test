const path = require('path');
const port = 8888
const name = 'vue test' // page title

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    lintOnSave: true,
    devServer: {
        port: port,
        open: true
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        resolve: {
            alias: {
                '@': resolve('src'),
                '@css': resolve('src/assets/css'),
                '@image': resolve('src/assets/image')
            }
        }
    }
}
