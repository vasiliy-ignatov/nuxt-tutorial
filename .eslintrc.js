module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended'
	],
	plugins: [
	],
	// add your custom rules here
	rules: {
		"vue/html-indent": ["error", "tab"],
		"indent": ["error", "tab"],
		"no-tabs": ["error", { "allowIndentationTabs": true }],
		'vue/multi-word-component-names': ['error', {
			'ignores': ['default']
		}]
	}
}
