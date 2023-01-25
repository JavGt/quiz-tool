import dataQuiz from '#/data/example/quiz.example.json';
import { Quiz } from '@/components/Features/Quiz';

const TestQuiz = () => {
	return (
		<>
			<Quiz data={dataQuiz} />
		</>
	);
};

export default TestQuiz;
