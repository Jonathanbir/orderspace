/* eslint-disable no-plusplus */
import { createAction, handleActions } from 'redux-actions';

import { useRedux } from 'util/hook/redux';
import { wrapFetch } from 'util/api';

export const getServiceIntro = createAction('GET_SERVICE_INTRO', () => async () => {
	const { data, code, message } = await wrapFetch('serviceIntros', {
		method: 'GET',
	});

	if (code !== 200 || code !== 200) {
		throw new Error(message);
	}

	return data;
});

export const getPartners = createAction('GET_PARTNERS', () => async () => {
	const { data, code, message } = await wrapFetch('partners', {
		method: 'GET',
	});

	if (code !== 200 || code !== 200) {
		throw new Error(message);
	}

	return data;
});

const reducer = {
	service: handleActions(
		{
			GET_SERVICE_INTRO_PENDING: state => ({
				...state,

				serviceIntroList: [],
				loading: true,
			}),

			GET_SERVICE_INTRO_FULFILLED: (state, action) => ({
				...state,

				serviceIntroList: action.payload,
				loading: false,
			}),

			GET_PARTNERS_PENDING: state => ({
				...state,

				partnersList: [],
				loading: true,
			}),

			GET_PARTNERS_FULFILLED: (state, action) => ({
				...state,

				partnersList: action.payload,
				loading: false,
			}),
		},
		{
			serviceIntroList: [],
			partnersList: [],
			loading: false,
		},
	),
};

const selectService = state => state.service;

export const useService = () =>
	useRedux(selectService, {
		getServiceIntro,
		getPartners,
	});

export default { reducer };
