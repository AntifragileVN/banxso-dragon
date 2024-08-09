import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { auth } from './firebase';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { currentUserState, isAuthenticatedState } from '@/store/user.store';

export const useAuth = () => {
	const [, setIsAuthenticated] = useRecoilState(isAuthenticatedState);
	const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setIsAuthenticated(!!user);
			setCurrentUser(user);
		});
		return () => unsubscribe();
	}, [setIsAuthenticated, setCurrentUser]);

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
		currentUser,
		signup,
		login,
		logout,
	};
};
