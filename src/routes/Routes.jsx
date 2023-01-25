import { CreateQuiz } from '@/pages/create-quiz';
import { Home } from '@/pages/Home';
import { Quiz } from '@/pages/quiz';
import { TestQuiz } from '@/pages/TestQuiz';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: 'create-quiz',
		element: <CreateQuiz />,
	},
	{
		path: 'create-quiz/:id',
		element: <CreateQuiz />,
	},
	{
		path: 'quiz',
		element: <Quiz />,
	},
	{
		path: '/demo/quiz',
		element: <TestQuiz />,
	},
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
