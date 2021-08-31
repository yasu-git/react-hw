const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: false,
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                //node-modulesを変更しないようにするための設定
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            // プリセットを指定することで、ES2020 を ES5 に変換
                            "@babel/preset-env",
                            "@babel/react"
                        ]
                    }
                }
            }

        ]
    }
};