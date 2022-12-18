import { useState } from 'react';

export const useQualificationQuiz = (selectedQuestions, questions) => {
	const evaluatedQuestions = questions.reduce((acc, cur, index) => {
		const { options, questions } = cur;

		if (!selectedQuestions[index])
			return {
				questions,
				options: [],
				totalCorrectQuestions: 0,
				percentage: 0,
			};

		const totalCorrectQuestions = selectedQuestions[index].reduce(
			(acc, cur) => (cur.correct ? acc + 1 : acc),
			0
		);
	}, []);

	// const evaluatedQuestions = questions.map((reagent, index) => {
	// 	const { options, questions } = reagent;

	// 	if (!selectedQuestions[index])
	// 		return {
	// 			questions,
	// 			options: [],
	// 			totalCorrectQuestions: 0,
	// 			percentage: 0,
	// 		};

	// 	const totalCorrectQuestions = selectedQuestions[index].filter(
	// 		({ correct }) => correct
	// 	).length;

	// 	return {
	// 		questions,
	// 		options: selectedQuestions[index],
	// 		totalCorrectQuestions: totalCorrectQuestions,
	// 		percentage: (totalCorrectQuestions / options.length) * 100,
	// 	};
	// });

	// const totalCorrectQuestions = evaluatedQuestions.reduce(
	// 	(acc, cur) => ({
	// 		totalCorrectQuestions: acc.totalCorrectQuestions + cur.totalCorrectQuestions,
	// 		totalQuestions: acc.totalQuestions + cur.options.length,
	// 	}),
	// 	{
	// 		totalCorrectQuestions: 0,
	// 		totalQuestions: 0,
	// 	}
	// );

	return {
		loading,
		evaluatedQuestions,
		...totalCorrectQuestions,
	};
};
