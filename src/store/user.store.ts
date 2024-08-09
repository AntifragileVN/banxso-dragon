import { atom } from 'recoil';
import { User } from 'firebase/auth';
import { auth } from '@/services/firebase';

export const currentUserState = atom<User | null>({
	key: 'currentUserState',
	dangerouslyAllowMutability: true,
	default: auth.currentUser,
});

export const currentUserIdState = atom<string>({
	key: 'isAuthenticatedState',
	default: '',
});

export const isAuthenticatedState = atom<boolean>({
	key: 'isAuthenticatedState',
	default: false,
});
