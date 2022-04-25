module.exports = {
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.css', '.scss']
	},
	module: {
		rules: require('./rules.webpack'),
	},
}