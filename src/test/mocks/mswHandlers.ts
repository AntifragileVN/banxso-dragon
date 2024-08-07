import { http, HttpResponse } from 'msw';

const PATH = process.env.REACT_APP_API_PATH;

export const handlers = [
	http.get(`${PATH}/tools?`, () => {
		return HttpResponse.json({
			type: 'MONO_NET_ACQUIRING',
			token: 'a7a22010-a92a-4291-212a-62a2fa0c2aa2',
		});
	}),
];
