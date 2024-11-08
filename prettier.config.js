/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	plugins: ['prettier-plugin-ember-template-tag'],
	overrides: [
		{
			// Lol, JavaScript
			files: ['*.js', '*.ts', '*.cjs', '.mjs', '.cts', '.mts', '.cts'],
			options: {
				singleQuote: true,
				trailingComma: 'es5',
			},
		},
		{
			files: ['*.gjs', '*.gts'],
			options: {
				parser: 'ember-template-tag',
				singleQuote: true,
				templateSingleQuote: false,
				trailingComma: 'es5',
			},
		},
	],
};

export default config;
