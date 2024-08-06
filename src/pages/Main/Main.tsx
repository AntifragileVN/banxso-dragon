import React, { useEffect, useRef, useState } from 'react';
import * as api from '@/services/index';
import RocketCardList from './RocketCardList/RocketCardList';
import { rocketsState } from '@/store/rockets.store';
import { useRecoilState } from 'recoil';

const Main = () => {
	const [rockets, setRockets] = useRecoilState(rocketsState);

	useEffect(() => {
		const fetchRocketParams = async () => {
			const response = await api.getRocketParams();
			if (response?.length >= 0) {
				console.log(response);
				setRockets(response);
			}
		};

		fetchRocketParams();
	}, []);
	return (
		<>
			<RocketCardList rockets={rockets} />
		</>
	);
};

export default Main;
