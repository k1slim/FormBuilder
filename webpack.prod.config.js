const path = require('path');
const webpack = require('webpack');

module.exports = {
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
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url?limit=1000!img?minimize&optimizationLevel=5&progressive=true'
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react', 'stage-0']
                        }
                    }

                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        alias: {
            config: path.join(__dirname, 'src/config', process.env.NODE_ENV)
        }
    }
};
