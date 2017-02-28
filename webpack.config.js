const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');
const path = require('path');
const autoprefixer = require('autoprefixer');


const bannerPlugin = new webpack.BannerPlugin(
	{ raw: true,banner: '// { "framework": "Vue" }\n' }
);
const ASSETS = 'dist'; // 输出目录名
var commonJs = ['whatwg-fetch','babel-polyfill'];
var loaders = [
	{loader: 'style-loader'},
	{loader: 'css-loader'},
	{
		loader: 'postcss-loader',
		options: {
			plugins: [
				autoprefixer({ browsers: ['last 7 versions'], cascade: false })
			]
		}
	}
];
var entry = {
	app: './app.js',
	'v-echarts': commonJs.concat(['./src/page/v-echarts.js']),
};
function getBaseConfig (notArr=[]) {
	let entryJson = {};
	Object.keys(entry).forEach(function (name) {
	    if (notArr.indexOf(name) == -1) {
	    	entryJson[name] = entry[name];
	    }
	});
	return {
		entry: entryJson,
		output: {
			// publicPath: '',
			path: path.resolve(__dirname, ASSETS),
		},
		plugins: [
			bannerPlugin,
			new CopyWebpackPlugin([
				{from: 'images/tmp/**/*'}
			]),
			/*new webpack.optimize.UglifyJsPlugin({
				compressor: {
					warnings: false
				}
			}),*/
		],
		module: {
			rules: [
				{
					test: /\.vue(\?[^?]+)?$/,
					exclude:/node_modules/,
					use: [
						{
							loader: '',
							options: {
								preserveWhitespace: false,
								postcss: [require('autoprefixer')({browsers: ['last 7 versions']})],
								loaders: {
									'js': 'babel-loader?presets[]=es2015'
								}
							}
						}
					]
				},
				// jshint,代码优化时打开
				/*{
					test: /\.js$/,
					exclude:/(node_modules|lib)/,
					use: [
						{
							loader: "jshint-loader", 
							options: { 
								"freeze": true, // 禁止覆盖本地对象
								"-W041": false,    // 忽略 === 与 == 的区别
								// "loopfunc": true, // 允许循环中使用函数
								"asi": true,  // 允许省略行尾分号
								"esversion": 6, // 支持es6语法规则
								"elision": true, // 支持[1,,,3]
								"unused": true, // 警告未使用的定义对象
								"expr": true,   // 可以使用表达式,某些[奇淫技巧]
								"lastsemic": true // 最后的分号可以省略
								// more see -> http://www.jshint.com/docs/options/
							}
						}
					],
					enforce: 'pre'
				},*/
				{test: /\.html$/,exclude:/node_modules/,use: ['pug-loader']},
				{
					test: /\.js$/,
					exclude:/(node_modules|lib)/,
					use: [
						{
							loader:'babel-loader',
							options: {presets: [["es2015", { "modules": false }]]}
						}
					]
				},
				{test: /\.tsx?$/,exclude:/(node_modules)/,use:['ts-loader']},
				{
					test: /\.css$/,
					exclude:/node_modules/,
					use: loaders
				},
				{
					test: /\.(scss|sass)$/,
					exclude:/node_modules/,
					use: loaders.concat({loader: 'sass-loader'})
				},
				{
					test: /\.less$/,
					exclude:/node_modules/,
					use: loaders.concat({loader: 'less-loader'})
				},
				{test: /\.(json|data)$/,exclude:/node_modules/,use: ['json-loader']},
				{test: /\.(txt|md)$/,exclude:/node_modules/,use: ['raw-loader']},
				{
					test: /\.(png|jpe?g|gif|ttf)$/,
					exclude:/node_modules/,
					use: [
						{
							loader:'url-loader',
							options: {
								limit: 8192,
								name: '[path][name].[ext]?[hash]'
							}
						}
					]
				}
			]
		},
		// 其他配置
		resolve: {
			modules: [
				process.cwd(),
				"node_modules"
			],
			extensions: ['.js', '.vue'],
			alias: {
				"dataFormat":     "src/modules/dataFormat.js"
			}
		}
	}
}

var webConfig = getBaseConfig();
webConfig.output.filename = '[name].web.js';
webConfig.module.rules[0].use[0].loader = 'vue-loader';

var weexConfig = getBaseConfig(['v-echarts']);
weexConfig.output.filename = '[name].weex.js';
weexConfig.module.rules[0].use[0].loader = 'weex-loader';

module.exports = [webConfig, weexConfig]
