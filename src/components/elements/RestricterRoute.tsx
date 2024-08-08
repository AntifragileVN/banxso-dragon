import { useAuth } from '@/services/auth.service';
import { Navigate } from 'react-router-dom';

type RestrictedRouteProps = {
	component: React.ComponentType;
	redirectTo: string;
	// [key: string]: any;
};

export const RestrictedRoute = ({
	component: Component,
	redirectTo = '/',
}: RestrictedRouteProps) => {
	const { currentUser } = useAuth();

	return currentUser ? <Navigate to={redirectTo} /> : <Component />;
};
