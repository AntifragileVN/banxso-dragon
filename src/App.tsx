import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SharedLayout from '@/components/elements/SharedLayout/SharedLayout';
import Main from '@/pages/Main/Main';
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));
const RocketDescription = lazy(
	() => import('./pages/RocketDescription/RocketDescription')
);

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <SharedLayout />,
			children: [
				{ index: true, element: <Main /> },
				{ path: 'rocket/:id', element: <RocketDescription /> },
				{ path: '*', element: <NotFound /> },
			],
		},
	]);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
