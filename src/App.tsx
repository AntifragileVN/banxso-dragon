import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SharedLayout from '@/components/elements/SharedLayout/SharedLayout';
import Main from '@/pages/Main/Main';
import { RestrictedRoute } from '@/components/elements/RestricterRoute';
import { PrivateRoute } from './components/elements/PrivateRoute';
const FirebaseAuthUI = lazy(() => import('@/pages/Auth/Auth'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));
const RocketDescription = lazy(
	() => import('./pages/RocketDescription/RocketDescription')
);
const Favorites = lazy(() => import('@/pages/Favorites/Favorites'));

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <SharedLayout />,
			children: [
				{
					index: true,
					element: <Main />,
				},
				{
					path: 'rocket/:id',
					element: <RocketDescription />,
				},
				{
					path: 'favorites',
					element: <PrivateRoute redirectTo="/" component={Favorites} />,
				},
				{
					path: 'auth',
					element: (
						<RestrictedRoute redirectTo="/" component={FirebaseAuthUI} />
					),
				},

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
