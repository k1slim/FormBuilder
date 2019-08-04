const path = require('path');
const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    node: false,
    entry: {
        src: path.resolve(__dirname, 'src/main.js')
    },
    output: {
        path: path.resolve(__dirname, 'src/dist'),
        filename: '[name].bundle.js'
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.NoEmitOnErrorsPlugin()
        // new BundleAnalyzerPlugin()
    ],

    devtool: 'cheap-module-eval-source-map',

    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        port: 9001,
        compress: true,
        historyApiFallback: {
            rewrites: [
                {
                    from: /^\/^.(jpe?g|png|gif|svg|css|scss|json|js|jsx)/,
                    to: 'index.html'
                }
            ]
        }
    },

    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js?$/,
                exclude: [/node_modules/],
                enforce: 'pre',
                use: ['eslint-loader']
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }]
            }
        ]
    },
    resolve: {
        alias: {
            config: path.join(__dirname, 'src/config', process.env.NODE_ENV)
        }
    }
};
