var path = require("path");
var webpack = require("webpack");

// 定义全局变量，判断当前项目代码运行在什么环境：日常 or 预发 or 线上
var devEnv = JSON.parse(process.env.BUILD_DEV || 'false');
var preReleaseEnv = JSON.parse(process.env.BUILD_PRERELEASE || 'false');
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(devEnv),
  __PRERELEASE__: JSON.stringify(preReleaseEnv)
});

module.exports = {
	devtool: 'source-map',
	entry: {
		vendor: ['jquery', 'handlebars', __dirname+'/src/js/common/tips.js', __dirname+'/src/css/main.less'],  // 基础库和公用模块都放在容器中
		main: './src/js/main.js',
		pageA: './src/js/pageA.js',
		pageB: './src/js/pageB.js'
	},
	output: {
		path: path.join(__dirname, "build"),
		publicPath: "/build/",
		filename: '[name].bundle.js',
		chunkFilename: "[id].chunk.js"
	},
	module: {
		loaders: [
			{ test: /\.less$/, loader: "style!css!less" },
			{
		        test: /\.(jpe?g|png|gif|svg)$/i,
		        loaders: [
		            'file?hash=sha512&digest=hex&name=[hash].[ext]',
		            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
		        ]
		    }
		]
	},
	plugins: [
        new webpack.ProvidePlugin({  // 在遇到下面的 key 关键字时，自动在模块里加上 require('jquery')，相当于自动添加依赖
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "root.jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
		  name: "vendor"
		}),
		devEnv ? new webpack.optimize.UglifyJsPlugin({
			compress: {
		        warnings: false
		    },
			minimize: true
		}) : function(){},
		definePlugin
    ],
	resolve: {
        alias: {
            jquery: path.join(__dirname, "src/js/lib/jquery-2.1.4.js"),  // 必须是绝对路径
        	handlebars: path.join(__dirname, "src/js/lib/handlebars-v3.0.3.js")
        }
    }
};
