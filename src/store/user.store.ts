import { atom } from 'recoil';
import { User } from 'firebase/auth';

export const currentUserState = atom<User | null>({
	key: 'currentUserState',
	default: null,
});
