const path = require('path');
const webpack = require('webpack');

module.exports = {
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel-loader'],
			exclude: /node_modules/
		}]
	},
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: 'index.js',
		path: path.join(__dirname, 'lib'),
		library: 'react-textfitter',
		libraryTarget: 'umd'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				screw_ie8: true,
				warnings: false
			}
		}),
	],
	resolve: {
		extensions: ['.js']
	}
};
