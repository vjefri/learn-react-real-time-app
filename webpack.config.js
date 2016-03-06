const path = require('path');
const webpack = require('webpack');

module.exports = {
	// this lets you debug in the browser with source maps
	devtool: 'eval-source-map',
	entry: {
		main: [
			'./src/main.js'
		]
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'public'),
		publicPath: '/public/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			include: path.join(__dirname, 'src'),
			// this passes the code through the loaders RIGHT TO LEFT
			loader: 'react-hot!babel'
		}, {
			test: /\.scss$/,
			include: path.join(__dirname, 'src'),
			loader: 'style!css!sass'
		}]
	}
};
