import { favoriteRocketsState } from '@/store/favorites.store';
import { useRecoilState } from 'recoil';

const Favorites = () => {
	const [favorites] = useRecoilState(favoriteRocketsState);
	const result = JSON.stringify(favorites);
	return <div className="container">{result}</div>;
};

export default Favorites;
