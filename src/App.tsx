import { useEffect } from 'react';
import * as api from '@/services/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SharedLayout from '@/components/elements/SharedLayout/SharedLayout';
import NotFound from '@/pages/NotFound/NotFound';

function App() {
	useEffect(() => {
		const fetchDragons = async () => {
			const response = await api.getRocketParameters();
			if (response?.length >= 0) {
				console.log(response);
			}
		};

		fetchDragons();
	}, []);

	const router = createBrowserRouter([
		{
			path: '/',
			element: <SharedLayout />,
			children: [{ index: true }, { path: '*', element: <NotFound /> }],
		},
	]);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
