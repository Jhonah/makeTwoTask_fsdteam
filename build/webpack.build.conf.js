const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const buildWebpackConfig = merge(baseWebpackConfig, {
    // BUILD config
    mode: 'production',
    output: {
        publicPath: './'
    },
    plugins: [],
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})