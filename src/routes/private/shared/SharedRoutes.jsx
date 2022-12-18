import { CreateQuiz } from '@/pages/create-quiz';
import { Home } from '@/pages/Home';
import { Quiz } from '@/pages/quiz';
import { createBrowserRouter, RouterProvider, useRouteError } from 'react-router-dom';

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
		loader: () => {
			const error = new Error('Error loading quiz');
			error.code = 404;
			throw error;
		},
		errorElement: <ErrorPage />,
	},
]);

function ErrorPage() {
	const error = useRouteError();

	return (
		<div>
			<h1>{error.message}</h1>
			<h1>{error.code}</h1>
		</div>
	);
}

const SharedRoutes = () => {
	return <RouterProvider router={router} />;
};

export default SharedRoutes;
