import { isAuthenticatedState } from '@/store/user.store';
import { Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

type PrivateRouteProps = {
	component: React.ComponentType;

	redirectTo: string;
	// [key: string]: any;
};

export const PrivateRoute = ({
	component: Component,
	redirectTo = '/auth',
}: PrivateRouteProps) => {
	const [isAuthenticated] = useRecoilState(isAuthenticatedState);
	// const { currentUser } = useAuth();
	const shouldRedirect = !isAuthenticated;

	console.log(shouldRedirect);

	return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
