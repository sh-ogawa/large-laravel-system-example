const path = require('path')
module.exports = {
    entry: path.resolve(__dirname, "resources/js/app.js"),
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': __dirname + '/resources/js'
        }
    }
}
