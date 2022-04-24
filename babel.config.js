module.exports = {
	presets: [
		'@babel/preset-env',
		'@babel/preset-typescript',
		['@babel/preset-react', {
			runtime: 'automatic'
		}]
	],
	plugins: [
		['@babel/plugin-transform-runtime', {
			regenerator: true
		},],
		[
			'module-resolver',
			{
				root: ['./'],
				alias: {
					"@components": "./src/@components/",
					"@helpers": "./src/@helpers/",
					"@screens": "./src/@screens/",
					"@styles": "./src/@styles/",
					"@constants": "./src/@constants/",
					"@contexts": "./src/@contexts/",
					"@components/*": "./src/@components/*",
					"@helpers/*": "./src/@helpers/*",
					"@screens/*": "./src/@screens/*",
					"@styles/*": "./src/@styles/*",
					"@constants/*": "./src/@constants/*",
					"@contexts/*": "./src/@contexts/*"
				},
			},
		],
	],
}
