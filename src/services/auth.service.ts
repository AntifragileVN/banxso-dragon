import { auth } from './firebase';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { useRecoilState } from 'recoil';
import { currentUserState } from '@/store/user.store';

export const useAuth = () => {
	const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

	// useEffect(() => {
	// 	const unsubscribe = onAuthStateChanged(auth, (user) => {
	// 		setCurrentUser(user);
	// 		console.log('user', user);
	// 	});
	// 	return unsubscribe;
	// }, [setCurrentUser]);

	const signup = (email: string, password: string) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const login = (email: string, password: string) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logout = () => {
		return signOut(auth);
	};

	return {
		currentUser,
		setCurrentUser,
		signup,
		login,
		logout,
	};
};
