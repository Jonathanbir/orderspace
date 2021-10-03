/* eslint-disable no-plusplus */
import { createAction, handleActions } from 'redux-actions';

import { useRedux } from 'util/hook/redux';
import { wrapFetch } from 'util/api';

const fetchData = createAction('FETCH_HOME_DATA', ({ key, api, query = {} }) => async () => {
	const { code, message, data } = await wrapFetch(
		api,
		{
			method: 'GET',
		},
		query,
	);

	if (code !== 200 && code !== 201) {
		throw new Error(message);
	}

	return { key, data };
});

export const fetchHome = () => async dispatch => {
	await Promise.all([
		dispatch(fetchData({ key: 'bannerList', api: 'banners' })),
		dispatch(fetchData({ key: 'serviceList', api: 'serviceIntros', query: { scope: 'home' } })),
		dispatch(fetchData({ key: 'newsList', api: 'news', query: { scope: 'home' } })),
		dispatch(fetchData({ key: 'satisticList', api: 'statistics' })),
		dispatch(fetchData({ key: 'eliteList', api: 'elites' })),
		dispatch(fetchData({ key: 'partnerList', api: 'partners' })),
	]);
};

const reducer = {
	home: handleActions(
		{
			FETCH_HOME_DATA_PENDING: state => ({
				...state,

				bannerList: [],
				serviceList: [],
				newsList: [],
				satisticList: [],
				eliteList: [],
				partnerList: [],
				loading: true,
			}),

			FETCH_HOME_DATA_FULFILLED: (state, action) => ({
				...state,

				[action.payload.key]: action.payload.data,
				loading: false,
			}),
		},
		{
			bannerList: [],
			serviceList: [],
			newsList: [],
			satisticList: [],
			eliteList: [],
			partnerList: [],
			loading: false,
		},
	),
};

const selectHome = state => state.home;

export const useHome = () => useRedux(selectHome, { fetchHome });

export default { reducer };
