import { QuizInit } from '@/components/Features/Quiz/QuizInit';
import { Header } from '@/components/UI/Header';
import { useQuiz } from '@/hooks/common/useQuiz';
import { Grid, styled } from '@mui/material';
import { useReducer } from 'react';
import { PanelOptions } from './components/PanelOptions';
import { PanelQuestion } from './components/PanelQuestion';
import { QuizFinished } from './components/QuizFinished';
import QuizData from './dataExampleQuiz.json';

//  TODO: crear herramienta para crear quiz para cuando este en construccion

/*
 Mode of the quiz:
 - 'init' -> quiz not started
 - 'progress' -> quiz in progress
 - 'jump' -> quiz in progress but in jump mode
 - 'finish' -> quiz finished
*/

const modeQuiz = {
	init: 'init',
	progress: 'progress',
	jump: 'jump',
	finish: 'finish',
};

const quizEmpty = {
	mode: modeQuiz.init,
	questionIndex: 0,
	jumpAvailable: 3,
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
	START_QUIZ: 'START_QUIZ',
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
		case actionsTypes.START_QUIZ:
			return {
				...state,
				mode: modeQuiz.progress,
			};
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

	const { handleFinish, handleStart, handleNext, settings, handleJumped } = useQuiz(data);

	const handleFinishQuiz = () => dispatchQuiz({ type: actionsTypes.FINISH_QUIZ });

	if (settings.mode === modeQuiz.finish)
		return (
			<QuizFinished
				title={titulo}
				iconography={iconografía}
				selectedQuestions={questionAnswered}
				questions={cuerpo}
			/>
		);

	return (
		<>
			<QuizInit
				open={settings.mode === modeQuiz.init}
				data={data}
				handleInit={handleStart}
			/>

			<Header title={<strong>Quiz</strong>} />

			<GridContainer container columns={12}>
				<Grid item xs={12} md={6} height={{ sx: '100%' }} overflow='auto'>
					<PanelQuestion
						mode={settings.mode}
						totalQuestions={cuerpo.length}
						question={cuerpo[settings.questionIndex]?.question}
						indexQuestion={settings.questionIndex}
						jumpAvailable={settings.jumpAvailable}
						handleJumpQuestion={handleJumped}
						title={titulo}
						iconography={iconografía}
					/>
				</Grid>

				<Grid item xs={12} md={6} height={{ sx: '100%' }} overflow='auto'>
					<PanelOptions
						onFinish={handleFinishQuiz}
						onNext={handleNext}
						options={cuerpo[settings.questionIndex]?.options}
						time={tiempoS}
					/>
				</Grid>
			</GridContainer>
		</>
	);
};

const GridContainer = styled(Grid)(({ theme }) => {
	const tablet = theme.breakpoints.up('sm');

	return {
		height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,

		[tablet]: {
			height: `calc(100vh - ${theme.mixins.toolbar[tablet].minHeight}px)`,
		},
	};
});

Quiz.defaultProps = {
	data: QuizData,
};

export default Quiz;
