import { useAuth } from '@/services/auth.service';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
	component: React.ComponentType;

	redirectTo: string;
	// [key: string]: any;
};

export const PrivateRoute = ({
	component: Component,
	redirectTo = '/auth',
}: PrivateRouteProps) => {
	const { currentUser } = useAuth();
	console.log(currentUser);

	const shouldRedirect = !currentUser;

	console.log(shouldRedirect);

	return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
