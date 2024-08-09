import { isAuthenticatedState } from '@/store/user.store';
import { Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

type RestrictedRouteProps = {
	component: React.ComponentType;
	redirectTo: string;
};

export const RestrictedRoute = ({
	component: Component,
	redirectTo = '/',
}: RestrictedRouteProps) => {
	const [isAuthenticated] = useRecoilState(isAuthenticatedState);
	return isAuthenticated ? <Navigate to={redirectTo} /> : <Component />;
};
