import _axios from 'axios';

const JWT = 'storage_token_id';

const getToken = token => {
	return localStorage.getItem(JWT);
};

const axios = baseURL => {
	const instance = _axios.create({
		baseURL: baseURL || 'http://localhost:3003/',
		timeout: 1000,
	});

	instance.interceptors.request.use(
		config => {
			const jwToken = getToken();
			config.headers['Authorization'] = 'Bearer ' + jwToken;
			// Do something before request is sent
			return config;
		},
		error => {
			// Do something with request error
			return Promise.reject(error);
		},
	);

	return instance;
};

export { axios };

export default axios();
