module.exports = {
	//Use tabs, and I have a strong opinion on tab width
	useTabs: true,
	tabWidth: 4,

	//Line length before wrapping
	printWidth: 100,

    //Avoid parenthesis around a sole arrow function parem
    arrowParens: "avoid",

	// { foo: bar } as opposed to {foo:bar}, for readability
	bracketSpacing: true,

	// Single quotes for strings, except in JSX
	singleQuote: true,
	quoteProps: 'consistent',
	jsxSingleQuote: false,

	//Place the closing > on a new line
	jsxBracketSameLine: false,

	// Trailing commas for improved diff
	trailingComma: 'all',

	// Enforce LF for line breaks
	endOfLine: 'lf',
};
