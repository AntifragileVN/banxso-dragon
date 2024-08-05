import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Header from 'src/components/Header/Header.jsx';
// import { Footer } from 'src/components/footer/Footer.jsx';

const SharedLayout = () => {
	return (
		<>
			{/* <Header /> */}
			<Suspense fallback={null}>
				<main>
					<Outlet />
				</main>
			</Suspense>
		</>
	);
};

export default SharedLayout;
