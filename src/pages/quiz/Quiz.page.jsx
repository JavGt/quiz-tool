import { Grid } from '@mui/material';
import { useLayoutEffect, useReducer } from 'react';
import { PanelOptions } from './components/PanelOptions';
import { PanelQuestion } from './components/PanelQuestion';
import { QuizFinished } from './components/QuizFinished';
import QuizData from './dataExampleQuiz.json';

//  TODO: crear herramienta para crear quiz para cuando este en construccion

const quizEmpty = {
	mode: 'linear,', // linear, ,jump, finish
	questionIndex: 0,
	jumpAvailable: 10,
	questionsJumped: [],
	questionAnswered: [],
};

const actionsTypes = {
	NEXT_QUESTION: 'NEXT_QUESTION',
	JUMP_QUESTION: 'JUMP_QUESTION',
	CHANGE_MODE: 'CHANGE_MODE',
	QUESTION_JUMPED_ANSWERED: 'QUESTION_JUMPED_ANSWERED',
	QUESTIONS_ANSWERED: 'QUESTIONS_ANSWERED',
	FINISH_QUIZ: 'FINISH_QUIZ',
};

const reducerQuiz = (state, action) => {
	switch (action.type) {
		case actionsTypes.NEXT_QUESTION:
			return {
				...state,
				questionIndex: state.questionIndex + 1,
				questionAnswered: [...state.questionAnswered, action.payload],
			};
		case actionsTypes.JUMP_QUESTION:
			return {
				...state,
				questionsJumped: [...new Set([...state.questionsJumped, state.questionIndex])],
				questionIndex: state.questionIndex + 1,
				jumpAvailable: state.jumpAvailable--,
			};
		case actionsTypes.CHANGE_MODE:
			const questionAnswered = action.payload
				? [...state.questionAnswered, action.payload]
				: state.questionAnswered;

			return {
				...state,
				questionAnswered,
				mode: 'jump',
				questionIndex: state.questionsJumped[0],
			};
		case actionsTypes.QUESTION_JUMPED_ANSWERED:
			const copyQuestionAnswered = [...state.questionAnswered];

			copyQuestionAnswered.splice(state.questionIndex, 0, action.payload);

			const questionsJumped = state.questionsJumped.filter(
				idx => idx !== state.questionIndex
			);

			return {
				...state,
				questionsJumped,
				questionAnswered: copyQuestionAnswered,
				questionIndex: questionsJumped.length ? questionsJumped[0] : state.questionIndex,
			};
		case actionsTypes.QUESTIONS_ANSWERED:
			return {
				...state,
				questionAnswered: [...state.questionAnswered, action.payload],
			};
		case actionsTypes.FINISH_QUIZ:
			return { ...state, mode: 'finish' };
		default:
			return state;
	}
};

const Quiz = ({ data }) => {
	const { cuerpo, tiempoS, titulo, iconografía } = data;

	const [
		{ mode, questionIndex, jumpAvailable, questionsJumped, questionAnswered },
		dispatchQuiz,
	] = useReducer(reducerQuiz, quizEmpty);

	const handleJumpQuestion = () => {
		if (jumpAvailable) dispatchQuiz({ type: actionsTypes.JUMP_QUESTION });

		if (questionIndex === cuerpo.length - 1)
			dispatchQuiz({ type: actionsTypes.CHANGE_MODE });
	};

	const handleNextQuestion = options => {
		if (mode !== 'jump') {
			if (questionIndex === cuerpo.length - 1) {
				if (questionsJumped.length)
					return dispatchQuiz({ type: actionsTypes.CHANGE_MODE, payload: options });

				return dispatchQuiz({ type: actionsTypes.QUESTIONS_ANSWERED, payload: options });
			}

			return dispatchQuiz({ type: actionsTypes.NEXT_QUESTION, payload: options });
		}

		dispatchQuiz({ type: actionsTypes.QUESTION_JUMPED_ANSWERED, payload: options });
	};

	useLayoutEffect(() => {
		if (questionAnswered.length === cuerpo.length) handleFinishQuiz();
	}, [questionAnswered]);

	const handleFinishQuiz = () => dispatchQuiz({ type: actionsTypes.FINISH_QUIZ });

	if (mode === 'finish')
		return (
			<QuizFinished
				title={titulo}
				iconography={iconografía}
				selectedQuestions={questionAnswered}
				questions={cuerpo}
			/>
		);

	return (
		<Grid
			container
			columns={12}
			height={{ xs: '100%', md: '100vh' }}
			overflow='hidden'
			maxHeight='1080px'
		>
			<Grid item xs={12} md={6} overflow='auto' maxHeight='100%'>
				<PanelQuestion
					mode={mode}
					totalQuestions={cuerpo.length}
					question={cuerpo[questionIndex]?.question}
					indexQuestion={questionIndex}
					jumpAvailable={jumpAvailable}
					handleJumpQuestion={handleJumpQuestion}
					title={titulo}
					iconography={iconografía}
				/>
			</Grid>

			<Grid item xs={12} md={6} overflow='auto' maxHeight='100%'>
				<PanelOptions
					onFinish={handleFinishQuiz}
					onNext={handleNextQuestion}
					options={cuerpo[questionIndex]?.options}
					time={tiempoS}
				/>
			</Grid>
		</Grid>
	);
};

Quiz.defaultProps = {
	data: QuizData,
};

export default Quiz;
