import { useReducer } from 'react';
import produce from 'immer';

//  TODO: crear herramienta para crear quiz para cuando este en construcción

/*
 Acciones del quiz:
 --- el quiz se inicia con el modo 'init' ---
 - 'modeProgress' -> cambiar el modo del quiz a progress
 - 'saveAnswer' -> guardar la respuesta de una pregunta
 - 'changeIndex' -> cambiar el indice de la pregunta
 - 'jumped' -> guardar el indice de la pregunta en preguntas saltadas
 - 'jumpedAnswered' -> guardar la respuesta de una pregunta saltada
 - 'removeIndexJumped' -> remover el indice de la pregunta saltada
 - 'modeJump' -> cambiar el modo del quiz a jump
 - 'modeFinish' -> cambiar el modo del quiz a finish
 */

/*
 Modos del quiz:
 - 'init' -> el quiz no ha iniciado
 - 'progress' -> el quiz esta en progress
 - 'jump' -> el quiz esta muestra las preguntas saltadas
 - 'finish' -> el quiz ha finalizado
*/

const modeQuiz = {
	init: 'init',
	progress: 'progress',
	jump: 'jump',
	finish: 'finish',
};

const quizInit = {
	mode: modeQuiz.progress,
	questionIndex: 0,
	jumpAvailable: 10,
	questionsJumped: [],
	questionAnswered: [],
};

const actionsTypes = {
	CHANGE_MODE: 'CHANGE_MODE',
	QUESTIONS_ANSWERED: 'QUESTIONS_ANSWERED',
	REDUCE_JUMP: 'REDUCE_JUMP',
	CHANGE_INDEX: 'CHANGE_INDEX',
	ADD_QUESTION_JUMPED: 'ADD_QUESTION_JUMPED',

	NEXT_QUESTION: 'NEXT_QUESTION',
	JUMP_QUESTION: 'JUMP_QUESTION',
	QUESTION_JUMPED_ANSWERED: 'QUESTION_JUMPED_ANSWERED',
};

const reducerQuiz = produce((draft, action) => {
	switch (action.type) {
		// case actionsTypes.NEXT_QUESTION:
		// 	draft.questionIndex = draft.questionIndex + 1;
		// 	draft.questionAnswered = [...draft.questionAnswered, action.payload];
		// 	break;
		// case actionsTypes.JUMP_QUESTION:
		// 	draft.questionsJumped = [
		// 		...new Set([...draft.questionsJumped, draft.questionIndex]),
		// 	];
		// 	draft.questionIndex = draft.questionIndex + 1;
		// 	draft.jumpAvailable = draft.jumpAvailable--;
		// 	break;

		// case actionsTypes.CHANGE_MODE:
		// 	const questionAnswered = action.payload
		// 		? [...draft.questionAnswered, action.payload]
		// 		: draft.questionAnswered;

		// 	return {
		// 		...state,
		// 		questionAnswered,
		// 		mode: 'jump',
		// 		questionIndex: state.questionsJumped[0],
		// 	};

		// case actionsTypes.QUESTION_JUMPED_ANSWERED:
		// 	const copyQuestionAnswered = [...state.questionAnswered];

		// 	copyQuestionAnswered.splice(state.questionIndex, 0, action.payload);

		// 	const questionsJumped = state.questionsJumped.filter(
		// 		idx => idx !== state.questionIndex
		// 	);

		// 	return {
		// 		...state,
		// 		questionsJumped,
		// 		questionAnswered: copyQuestionAnswered,
		// 		questionIndex: questionsJumped.length ? questionsJumped[0] : state.questionIndex,
		// 	};
		case actionsTypes.ADD_QUESTION_JUMPED:
			draft.questionsJumped = [...draft.questionsJumped, action.payload];
			draft.jumpAvailable = draft.jumpAvailable - 1;
			break;
		case actionsTypes.REDUCE_JUMP:
			draft.jumpAvailable = --draft.jumpAvailable;
			break;

		case actionsTypes.JUMP_QUESTION:
			draft.questionsJumped = [
				...new Set([...draft.questionsJumped, draft.questionIndex]),
			];
			break;

		case actionsTypes.CHANGE_INDEX:
			draft.questionIndex = action.payload;
			break;

		case actionsTypes.QUESTIONS_ANSWERED:
			draft.questionAnswered.splice(
				draft.questionIndex,
				draft.questionAnswered[draft.questionIndex],
				action.payload
			);
			if (draft.questionAnswered.length === countQuestions) draft.mode = modeQuiz.finish;
			break;

		case actionsTypes.CHANGE_MODE:
			draft.mode = action.payload;
			break;

		default:
	}
});

export const useQuiz = data => {
	const {} = data;

	const countQuestions = 10;

	const [settings, dispatch] = useReducer(reducerQuiz, quizInit);

	const { mode, questionIndex, jumpAvailable, questionsJumped, questionAnswered } =
		settings;

	const handleJumpedAnswered = options => {
		dispatch({ type: actionsTypes.QUESTIONS_ANSWERED, payload: options });

		dispatch({ type: actionsTypes.CHANGE_INDEX, payload: questionsJumped[1] });
	};

	const handleSaveAnswer = options => {
		dispatch({ type: actionsTypes.QUESTIONS_ANSWERED, payload: options });

		if (questionIndex === countQuestions - 1) return verifyLastQuestion();

		handleChangeIndex(questionIndex + 1);
	};

	const verifyLastQuestion = () => {
		if (questionsJumped.length && mode !== modeQuiz.jump) return handleChangeModeJump();

		handleFinish();
	};

	const handleNext = options => {
		if (mode === modeQuiz.jump) return handleJumpedAnswered(options);

		handleSaveAnswer(options);
	};

	const handleChangeModeJump = index => {
		dispatch({ type: actionsTypes.CHANGE_MODE, payload: modeQuiz.jump });
		handleChangeIndex(questionsJumped[0] ?? index);
	};

	const handleFinish = () => {
		dispatch({ type: actionsTypes.CHANGE_MODE, payload: modeQuiz.finish });
	};

	const handleStart = () => {
		dispatch({ type: actionsTypes.CHANGE_MODE, payload: modeQuiz.progress });
	};

	const handleJumped = index => {
		if (!jumpAvailable) return;

		const indexJumped = typeof index === 'number' ? index : questionIndex;

		dispatch({
			type: actionsTypes.ADD_QUESTION_JUMPED,
			payload: indexJumped,
		});

		if (questionIndex === countQuestions - 1) return handleChangeModeJump(indexJumped);

		handleChangeIndex(questionIndex + 1);
	};

	const handleChangeIndex = index =>
		dispatch({ type: actionsTypes.CHANGE_INDEX, payload: index });

	return {
		settings,
		handleStart,
		handleNext,
		handleJumped,
		handleFinish,
	};
};
