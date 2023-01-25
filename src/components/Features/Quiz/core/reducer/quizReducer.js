import produce from 'immer';
import { QUIZ_ACTION } from '../constants';

export const quizReducer = produce((draft, action) => {
	switch (action.type) {
		case QUIZ_ACTION.CHANGE_MODE:
			draft.mode = action.payload;
			break;
	}
});
