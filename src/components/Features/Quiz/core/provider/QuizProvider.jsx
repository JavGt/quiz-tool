import { createContext } from 'react';

export const quizContext = createContext();

const QuizProvider = ({ children, data }) => {
	return <quizContext.Provider value={{}}>{children}</quizContext.Provider>;
};
export default QuizProvider;
