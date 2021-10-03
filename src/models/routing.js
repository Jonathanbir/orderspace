import { createAction, handleActions } from 'redux-actions';
import { createContext, useContext } from 'react';
import qs from 'qs';

import { useRedux } from 'util/hook/redux';

import history from 'store/history';

export const routeChange = createAction('ROUTE_LOCATION_CHANGE', location => location);

const reducer = {
	routing: handleActions(
		{
			ROUTE_LOCATION_CHANGE: (state, action) => ({
				...state,
				...action.payload,
			}),
		},
		{ ...history.location },
	),
};

const getQueries = search => {
	const queries = {};

	if (search) {
		const queryStr = search.split('?')[1];
		const queryPairs = queryStr.split('&');

		queryPairs.forEach(query => {
			const [key, value] = query.split('=');
			queries[key] = value.includes('%2B') ? value.split('%2B').join('+') : decodeURI(value);
		});
	}

	return queries;
};

export const pushRoute = createAction(
	'PUSH_ROUTE',
	({ search = '', state, ...props }, cb = () => {}) => () => {
		const { search: oldSearch = '', pathname: oldPathname = '' } = history.location;
		const queryObj = getQueries(oldSearch);
		const newQueries =
			queryObj.src === 'app' ? { ...getQueries(search), src: 'app' } : getQueries(search);

		history.push({
			...props,
			search: qs.stringify(newQueries, { addQueryPrefix: true }),
			state: {
				prevPathname: oldPathname,
				prevSearch: oldSearch,
				...state,
			},
		});
		cb();
	},
);

export const replaceRoute = createAction(
	'REPLACE_ROUTE',
	({ search = '', state, ...props }, cb = () => {}) => () => {
		const { search: oldSearch = '', pathname: oldPathname = '' } = history.location;
		const queryObj = getQueries(oldSearch);
		const newQueries =
			queryObj.src === 'app' ? { ...getQueries(search), src: 'app' } : getQueries(search);

		history.replace({
			...props,
			search: qs.stringify(newQueries, { addQueryPrefix: true, encode: encodeURI }),
			state: {
				prevPathname: oldPathname,
				prevSearch: oldSearch,
				...state,
			},
		});
		cb();
	},
);

export const historyBack = createAction('HISTORY_BACK', () => {
	history.goBack();
});

export default { reducer };

export const HistoryContext = createContext({
	location: { pathname: '/' },
});

export const useHistory = () => useContext(HistoryContext);

const mapHooksToState = state => ({
	...state.routing,
	queries: getQueries(state.routing.search),
});

export const useRouting = () => useRedux(mapHooksToState, { pushRoute, replaceRoute, historyBack });
