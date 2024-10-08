import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/elements/Header/Header';

const SharedLayout = () => {
	const location = useLocation();

	return (
		<>
			{location.pathname !== '/' && (
				<div className="container">
					<Header />
				</div>
			)}
			<Suspense fallback={null}>
				<main>
					<Outlet />
				</main>
			</Suspense>
		</>
	);
};

export default SharedLayout;
