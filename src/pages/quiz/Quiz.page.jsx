import { Button, Grid } from '@mui/material';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { PanelOptions } from './components/PanelOptions';
import { PanelQuestion } from './components/PanelQuestion';
import QuizData from './dataExampleQuiz.json';

const Quiz = ({ data }) => {
	const { cuerpo, tiempoS } = data;

	const [questionIndex, setQuestionIndex] = useState(0);
	const [jumpAvailable, setJumpAvailable] = useState(5);

	const [questionAvailable, setQuestionAvailable] = useState(cuerpo);

	const [questionAnswered, setQuestionAnswered] = useState([]);

	const handleJumpQuestion = () => {
		if (jumpAvailable > 0) {
			setJumpAvailable(prev => prev - 1);

			// Obtener un indice aleatorio que no sea el actual
			let randomIndex = Math.floor(Math.random() * questionAvailable.length);

			setQuestionIndex(randomIndex);
		}
	};

	const handleNextQuestion = options => {
		const question = {
			question: cuerpo[questionIndex].question,
			options,
		};
		setQuestionAnswered(prev => [...prev, question]);
		setQuestionIndex(prev => prev + 1);
		setQuestionAvailable(prev => {
			const copy = [...prev];
			copy.splice(questionIndex, 1);
			return copy;
		});
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
			{/* Hacer un bottom que  te envie a la pagina "create-quiz ", que tenga el estilo de material y sea un link de react-router-dom */}
			<Link to='/create-quiz' state={{ state: { cuerpo, tiempoS } }}>
				Finish Quiz
			</Link>

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
