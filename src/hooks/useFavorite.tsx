import { useEffect } from 'react';
import { useAuth } from '@/services/auth.service';
import { useRecoilState } from 'recoil';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/services/firebase';
import { favoriteRocketsState } from '@/store/favorites.store';

export const useFavorites = () => {
	const { currentUser } = useAuth();
	const [favorites, setFavorites] = useRecoilState(favoriteRocketsState);

	useEffect(() => {
		const fetchFavorites = async () => {
			if (currentUser) {
				const userDoc = doc(db, 'favorites', currentUser.uid);
				const docSnap = await getDoc(userDoc);
				if (docSnap.exists()) {
					setFavorites(docSnap.data().rockets);
				}
			}
		};

		fetchFavorites();
	}, [currentUser, setFavorites]);

	const toggleFavorites = async (rocketId: string) => {
		if (!currentUser) {
			alert('Please log in to add to favorites');
			return;
		}

		const userDoc = doc(db, 'favorites', currentUser.uid);

		if (favorites.includes(rocketId)) {
			const updatedFavorites = [...favorites].filter((id) => id !== rocketId);
			await setDoc(userDoc, { rockets: updatedFavorites }, { merge: true });
			setFavorites(updatedFavorites);
			return;
		}
		const updatedFavorites = [...favorites, rocketId];
		await setDoc(userDoc, { rockets: updatedFavorites }, { merge: true });
		setFavorites(updatedFavorites);
	};

	return {
		favorites,
		toggleFavorites,
	};
};
