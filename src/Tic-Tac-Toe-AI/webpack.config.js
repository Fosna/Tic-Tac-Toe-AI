module.exports = {
	entry: ["./app/app.ts"],
	output: {
		filename: "./build/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				exclude: "/node_modules/",
				loader: "babel-loader!ts-loader"
			}
		]
	},
	resolve: {
		extensions: ["", ".js", ".ts"]
	}
}
