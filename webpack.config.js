const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all',
		},
	}

	if (isProd) {
		config.minimizer = [
			new CssMinimizerWebpackPlugin(),
			new TerserWebpackPlugin(),
		]
	}

	return config
}

const filename = ext => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`)

const cssLoaders = extra => {
	const loaders = [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {
				// hmr: isDev,
				// reloadAll: true,
			},
		},
		'css-loader',
	]

	if (extra) {
		loaders.push(extra)
	}

	return loaders
}

const babelOptions = preset => {
	const options = {
		presets: ['@babel/preset-env'],
		plugins: [],
	}

	if (preset) {
		options.presets.push(preset)
		options.presets.push('@babel/plugin-syntax-jsx')
	}

	return options
}

module.exports = {
	//   context: path.resolve(__dirname, "src"),
	mode: 'development',
	entry: ['@babel/polyfill', './src/index.js'],
	output: {
		filename: filename('js'),
		path: path.resolve(__dirname, 'build'),
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			Styles: path.resolve(__dirname, 'src/styles'),
			Src: path.resolve(__dirname, 'src'),
			Assets: path.resolve(__dirname, 'src/assets'),
		},
	},
	optimization: optimization(),
	devServer: {
		static: {
			directory: path.join(__dirname, 'src'),
		},
		compress: true,
		port: 3000,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: {
				collapseWhitespace: isProd,
			},
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/favicon.ico'),
					to: path.resolve(__dirname, 'build'),
				},
			],
		}),
		new MiniCssExtractPlugin({
			filename: filename('css'),
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: cssLoaders(),
			},
			{
				test: /\.s[ac]ss$/,
				use: cssLoaders('sass-loader'),
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader'],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: babelOptions(),
				},
			},
			{
				test: /\.m?jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
		],
	},
}
