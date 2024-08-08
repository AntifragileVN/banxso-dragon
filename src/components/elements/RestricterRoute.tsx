import { useAuth } from '@/services/auth.service';
import { Navigate } from 'react-router-dom';

type RestrictedRouteProps = {
	component: React.ComponentType;
	redirectTo: string;
};

export const RestrictedRoute = ({
	component: Component,
	redirectTo = '/',
}: RestrictedRouteProps) => {
	const { currentUser } = useAuth();

	console.log(!!currentUser);

	return currentUser ? <Navigate to={redirectTo} /> : <Component />;
};
