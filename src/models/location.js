import { createAction, handleActions } from 'redux-actions';
import qs from 'qs';
import lodash from 'lodash';

import { useRedux } from 'util/hook/redux';
import { wrapFetch } from 'util/api';

import { pushRoute } from './routing';

const getLocation = createAction(
	'GET_LOCATION',
	(query = { type: null, search: '' }, inner = false) => async (dispatch, getState) => {
		const {
			routing: { pathname, search: prevSearch },
		} = getState();
		const prevQuery = qs.parse(prevSearch, { ignoreQueryPrefix: true });
		const targetQuery = () => {
			if (query.type && query.search !== '') {
				return query;
			}
			if (query.type && query.search === '') {
				return lodash.omit(query, ['search']);
			}
			if (!query.type && query.search !== '') {
				return query.type ? query : lodash.omit(query, ['type']);
			}
			return lodash.omit(query, ['search', 'type']);
		};
		const { data, code, message } = await wrapFetch(
			'branches',
			{
				method: 'GET',
			},
			targetQuery(),
		);

		const search = () => {
			if (query.type && query.search !== '') {
				return lodash.omit({ ...prevQuery, ...query }, ['per_page']);
			}
			if (query.type && query.search === '') {
				return lodash.omit({ ...prevQuery, ...query }, ['search', 'per_page']);
			}
			if (!query.type && query.search !== '') {
				return lodash.omit({ ...prevQuery, ...query }, ['type', 'per_page']);
			}
			return lodash.omit({ ...prevQuery, ...query }, ['search', 'type', 'per_page']);
		};

		if (code !== 200 || code !== 200) {
			throw new Error(message);
		}

		if (!inner) {
			dispatch(
				pushRoute({
					pathname,
					search: qs.stringify(search(), { addQueryPrefix: true }),
				}),
			);
		}

		return data;
	},
);

export const cleanLocation = createAction('CLEAN_NEWS');

const reducer = {
	location: handleActions(
		{
			GET_LOCATION_PENDING: state => ({
				...state,

				locationList: [],
				loading: true,
			}),

			GET_LOCATION_FULFILLED: (state, action) => ({
				...state,

				locationList: action.payload,
				loading: false,
			}),
		},
		{
			locationList: [],
			loading: false,
		},
	),
};

const selectLocation = state => state.location;

export const useLocation = () => useRedux(selectLocation, { getLocation, cleanLocation });

export default { reducer };
