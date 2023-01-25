import { useReducer } from 'react';
import { QUIZ_ACTION, QUIZ_EMPTY, QUIZ_MODE } from '../constants';
import { quizReducer } from '../reducer';

export const useQuiz = data => {
	const [settings, dispatch] = useReducer(quizReducer, QUIZ_EMPTY);

	const handleStart = () =>
		dispatch({ type: QUIZ_ACTION.CHANGE_MODE, payload: QUIZ_MODE.PROGRESS });

	return {
		settings,
		handleStart,
	};
};
