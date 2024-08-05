import React, { useEffect, useState } from 'react';
import * as api from '@/services/index';

const Main = () => {
	useEffect(() => {
		const fetchRocketParams = async () => {
			const response = await api.getRocketParams();
			if (response?.length >= 0) {
				console.log(response);
			}
		};

		fetchRocketParams();
	}, []);
	return <></>;
};

export default Main;
