module.exports = {
	extends: [
		'eslint:recommended',
		// Prettier
		'plugin:prettier/recommended',
	],
	env: {
		browser: true,
		node: true,
		es2020: true,
	},
	plugins: ['react', 'prettier'],
	rules: {
		// Mark Prettier syntax errors
		'prettier/prettier': 'error',
		// Enforce React.Fragment </> shorthand
		'react/jsx-fragments': 1,
	},
};
