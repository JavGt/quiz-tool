import { CreateQuiz } from '@/pages/create-quiz';
import { Home } from '@/pages/Home';
import { Quiz } from '@/pages/quiz';
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
		path: 'quiz/:id',
		element: <Quiz />,
	},
	{
		path: '/demo/quiz',
	},
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
