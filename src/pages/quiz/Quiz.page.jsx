import { Grid } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { PanelOptions } from './components/PanelOptions';
import { PanelQuestion } from './components/PanelQuestion';
import QuizData from './dataExampleQuiz.json';

const Quiz = ({ data }) => {
	const { cuerpo, tiempoS } = data;

	const [questionIndex, setQuestionIndex] = useState(0);
	const [jumpAvailable, setJumpAvailable] = useState(3);

	const [questionAnswered, setQuestionAnswered] = useState([]);
	const [indexJump, setIndexJump] = useState([]);

	const handleJumpQuestion = () => {
		if (!jumpAvailable) return;
		setIndexJump(prev => [...prev, questionIndex]);

		setJumpAvailable(prev => --prev);

		setQuestionIndex(prev => ++prev);
	};

	useEffect(() => {
		if (questionIndex >= cuerpo.length) {
			handleFinishQuiz();
		}
	}, [questionIndex]);

	const handleNextQuestion = options => {
		const question = { question: cuerpo[questionIndex].question, options };

		setQuestionAnswered(prev => [...prev, question]);

		setQuestionIndex(prev => ++prev);
	};

	const handleFinishQuiz = useCallback(() => {}, []);

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
					totalQuestions={cuerpo.length}
					question={cuerpo[questionIndex]?.question}
					indexQuestion={questionIndex}
					jumpAvailable={jumpAvailable}
					handleJumpQuestion={handleJumpQuestion}
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
