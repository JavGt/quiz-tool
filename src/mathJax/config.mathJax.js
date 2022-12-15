// Config file for mathJax

export const config = {
	loader: {
		load: ['[tex]/html'],
	},
	tex: {
		packages: {
			'[+]': ['html'],
		},
		inlineMath: [
			['$', '$'],
			['\\(', '\\)'],
		],
		displayMath: [
			['$$', '$$'],
			['\\[', '\\]'],
		],
	},
};
