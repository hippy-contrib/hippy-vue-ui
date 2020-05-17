const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../docs/hippy-ui'),
        libraryTarget: 'var'
    },
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    externals : {
        '@hippy/vue' : 'window.Vue'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                    'unicode-loader',
                    'scope-loader'
                ]
            },
            {
                test: /\.css$/,
                use: {
                    loader: '@hippy/vue-css-loader',
                    options: {
                        platform: 'dev',
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: '@hippy/vue-css-loader',
                        options: {
                            platform: 'dev',
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            transform: 'config/develop.css.transform.js'
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/'
                        }
                    }
                ]
            },
            {
                test: /\.(js)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                    'unicode-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
