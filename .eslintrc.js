module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: "vuetify",
	rules: {
		"vue/max-attributes-per-line": [
			"error",
			{
				singleline: 3,
				multiline: {
					max: 1,
					allowFirstLine: true,
				},
			},
		],
		indent: [2, "tab"],
		// space before function ()
		"space-before-function-paren": "off",
		"vue/script-indent": "off",
		semi: 0,
		quotes: 0,
		"no-tabs": 0,
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
	},
	parserOptions: {
		parser: "@babel/eslint-parser",
	},
};
