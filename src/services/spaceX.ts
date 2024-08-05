import { Rocket } from '@/types/rocket.type';
import axios, { AxiosResponse } from 'axios';

export const getRocketParams = async (): Promise<Rocket[]> => {
	try {
		const response: AxiosResponse<Rocket[]> = await axios.get(
			'https://api.spacexdata.com/v4/dragons'
		);
		return response?.data;
	} catch (error) {
		console.error('Error fetching getRocketParameters data:', error);
		return [];
	}
};
