import { Rocket } from '@/types/rocket.type';
import { atom } from 'recoil';

export const rocketsState = atom<Rocket[]>({
	key: 'rocketsState',
	default: [],
});
