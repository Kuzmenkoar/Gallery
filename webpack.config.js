var	path	=	require('path');
var	webpack	=	require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports	=	{
    devtool:	'cheap-module-eval-source-map',
    entry:	[
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index'
    ],
    output:	{
        path:	path.join(__dirname,	'dist'),
        filename:	'bundle.js',
        publicPath:	'/static/'
    },
    module:	{	//Обновлено
        preLoaders:	[	//добавили	ESlint	в	preloaders
            {
                test:	/\.js$/,
                loaders:	['eslint'],
                include:	[
                    path.resolve(__dirname,	"src"),
                ],
            }
        ],
        loaders:	[	//добавили	babel-loader
            {
                loaders:	['react-hot', 'babel-loader'],
                include:	[
                    path.resolve(__dirname,	"src"),
                ],
                test:	/\.js$/,
                plugins:	['transform-runtime'],
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.png/,
                loader: 'file'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins:	[
        new	webpack.optimize.OccurenceOrderPlugin(),
        new	webpack.HotModuleReplacementPlugin(),
        new	webpack.NoErrorsPlugin()
    ]
};