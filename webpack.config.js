const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${__dirname}/src/index.html`,
	filename: 'index.html',
	inject: 'body',
});




module.exports = {
	// 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
	// entry: [
	// 	'./src/app.jsx',
	// ],
	entry: {
		'App': './src/app.jsx'
	},


	// output 是放入產生出來的結果的相關參數
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].js'
	},

	resolve: {
		extensions: ['.js', '.jsx', 'css', '.scss'],
		modules: [
			'node_modules', // 先找这个
			path.resolve(__dirname, 'src/img'), // node_modules没有再找这个

		]



	},
	mode: "development",
	module: {
		//rules的值是一個陣列可以存放多個loader物件
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-class-properties']
					}
				}
			},

			{
				test: /\.(scss|sass)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader',
						options: { injectType: 'linkTag' }
					},
					{
						loader: 'file-loader',
						options: { name: '../css/[name].css' },
					},
					{ loader: 'sass-loader' }
				],
			},
			{
				test: /\.(png|jpg|gif|svg|jpeg|)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 15360, // size <= 15KB, 改成15257(<14.9KB)试试?  
							name: "[name]-[hash:5].min.[ext]", // 设置文件名(>limit的情况)
							publicPath: "static/", // 设置资源文件的引用根路径
							outputPath: "static/" // publicPath/outputPath/[name].[ext]
						}
					}
				]
			}
		]
	},
	// devServer 則是 webpack-dev-server 設定
	devServer: {
		inline: true,
		contentBase: path.join(__dirname, '/src/'),
		publicPath: "/",
		compress: true,
		port: 3000
	},
	// plugins 放置所使用的外掛
	plugins: [HTMLWebpackPluginConfig],
};