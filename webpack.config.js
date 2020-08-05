const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.module\.s(a|c)ss$/,
				loader: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourceMap: isDevelopment
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isDevelopment
						}
					}
				]
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: /\.module.(s(a|c)ss)$/,
				loader: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
						{
							loader: 'sass-loader',
							options: {
							sourceMap: isDevelopment
						}
					}
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react"
						],
						plugins: [
							"@babel/plugin-syntax-dynamic-import",
							"@babel/plugin-proposal-class-properties"
						]
					}
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss']
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: isDevelopment ? '[name].css' : '[name].[hash].css',
			chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
		}),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
		}),
		new Dotenv({
			path: './.env', // Path to .env file (this is the default)
			safe: true // load .env.example (defaults to "false" which does not use dotenv-safe)
		})
	]
};