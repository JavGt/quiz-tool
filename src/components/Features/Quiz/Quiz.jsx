import { HeaderLayout } from '@/components/UI/HeaderLayout';
import { QUIZ_MODE } from './core/constants';
import { useQuiz } from './core/hooks';
import { QuizPlay } from './QuizPlay';
import { QuizStart } from './QuizStart';

const Quiz = ({ data }) => {
	const { settings, handleStart } = useQuiz(data);

	return (
		<>
			<QuizStart
				open={settings.mode === QUIZ_MODE.START}
				data={data}
				handleStart={handleStart}
			/>

			<HeaderLayout />

			<QuizPlay />
		</>
	);
};

export default Quiz;
