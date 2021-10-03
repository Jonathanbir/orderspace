export const HOST_MAP = {
	dev: 'http://localhost:9000',
	demo: 'https://hib.25demo.com',
	stage: 'https://hib-uat.25demo.com',
	production: '',
};

const SELF_HOST_MAP = {
	dev: 'http://localhost:3000',
	demo: 'https://hib.25demo.com',
	stage: 'https://hib-uat.25demo.com',
	production: '',
};

const IMAGE_ENDPOINT_MAP = {
	dev: 'https://hib-official-dev.25demo.com/s3',
	demo: 'https://hib-official-dev.25demo.com/s3',
	stage: 'https://hib-official-stg.25demo.com/s3',
	production: '',
};

export const API_ENDPOINT = HOST_MAP[process.env.API];
export const SELF_HOST_ENDPOINT = SELF_HOST_MAP[process.env.API];
export const IMAGE_ENDPOINT = IMAGE_ENDPOINT_MAP[process.env.API];

export default {
	// Set API endpoint
	API_ENDPOINT: JSON.stringify(API_ENDPOINT),
	SELF_HOST_ENDPOINT: JSON.stringify(SELF_HOST_ENDPOINT),
	IMAGE_ENDPOINT: JSON.stringify(IMAGE_ENDPOINT),
};
