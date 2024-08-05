import axios from 'axios';

export const getRocketParameters = async () => {
	try {
		const response = await axios.get('https://api.spacexdata.com/v4/dragons');
		return response.data;
	} catch (error) {
		console.error('Error fetching getRocketParameters data:', error);
	}
};
