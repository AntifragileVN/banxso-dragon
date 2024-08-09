import { atom } from 'recoil';

export const favoriteRocketsState = atom<string[]>({
	key: 'favoriteRocketsState',
	default: [],
});
