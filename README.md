# webpack-example

> 一个使用 webpack 做模块化和打包的简单项目示例实践

## 需求

1. 使用诸如 `jQuery`, `handlebars` 的JS库，所有页面公用
2. 模块化
3. 异步加载模块
4. less
5. coffee/es6...
6. 某些模块要求通用，被多个页面使用（公用模块）
7. 考虑缓存
8. 便于调试（sourcemap）
9. 区分项目环境执行不同代码片段（全局项目环境变量）
10. 单页面或多页面应用（多页面时，每个页面一个入口文件）
11. 图片优化
12. ...

## Usage

1. 安装依赖

	```
	sudo npm install webpack webpack-dev-server
	git clone git@github.com:weekeight/webpack-example.git
	cd webpack-example
	npm install
	```

2. 调试

	```
	// 以 webpack-dev-server 工具起服务
	BUILD_DEV=1 webpack-dev-server
	// 打开 http://localhost:8080/webpack-dev-server/ ，自带 livereload 无需手动刷新
	```
	
3. 构建

	```
	webpack
	```