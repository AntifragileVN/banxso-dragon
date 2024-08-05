import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SharedLayout from '@/components/elements/SharedLayout/SharedLayout';
import NotFound from '@/pages/NotFound/NotFound';
import Main from '@/pages/Main/Main';
import RocketDescription from './pages/RocketDescription/RocketDescription';

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
