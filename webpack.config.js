module.exports = {
	entry: ["./scripts/app.js"],
	output: {
		filename: "bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},

	resolve: {
		extensions: ['', '.js']
	}
}
