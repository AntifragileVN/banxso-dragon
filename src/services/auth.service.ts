import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { auth } from './firebase';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { isAuthenticatedState } from '@/store/user.store';

export const useAuth = () => {
	const [, setIsAuthenticated] = useRecoilState(isAuthenticatedState);
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setIsAuthenticated(!!user);
		});
		return () => unsubscribe();
	}, [setIsAuthenticated]);

	const signup = (email: string, password: string) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const login = (email: string, password: string) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logout = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.log(error);
		}
	};

	return {
		signup,
		login,
		logout,
	};
};
