import { atom } from 'recoil';
import { User } from 'firebase/auth';
import { auth } from '@/services/firebase';

export const currentUserState = atom<User | null>({
	key: 'currentUserState',
	default: auth.currentUser,
});

export const isAuthenticatedState = atom<boolean>({
	key: 'isAuthenticatedState',
	default: false,
});
