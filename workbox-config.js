module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,jpeg,html,json,css,jpg}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};