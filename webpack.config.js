const path = require('path');

module.exports = {
    entry: "./src/main.js",
    output : {
        path: path.resolve(__dirname, 'public', 'bundle'),
        filename : 'bundle.js'
    },
    watch: true,
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    }

};