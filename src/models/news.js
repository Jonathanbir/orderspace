import { createAction, handleActions } from 'redux-actions';
import qs from 'qs';
import lodash from 'lodash';

import { useRedux } from 'util/hook/redux';
import { wrapFetch } from 'util/api';

import { pushRoute } from './routing';

const getMediaType = createAction('GET_MEDIA_TYPE', () => async () => {
	const { data, code, message } = await wrapFetch(
		'mediaTypes',
		{
			method: 'GET',
		},
		{ type: 'news' },
	);

	if (code !== 200 || code !== 200) {
		throw new Error(message);
	}

	return data;
});

const getNews = createAction(
	'GET_NEWS',
	(query = { page: 1, per_page: 9, type: null, search: '' }, inner = false) => async (
		dispatch,
		getState,
	) => {
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
				return lodash.omit(query, ['type']);
			}
			return lodash.omit(query, ['search', 'type']);
		};
		const { data, code, message } = await wrapFetch(
			'news',
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

const getNewsDetail = createAction('GET_NEWS_DETAIL', id => async () => {
	const { data, code, message } = await wrapFetch(`news/${id}`, {
		method: 'GET',
	});

	if (code !== 200) {
		throw new Error(message);
	}

	return data;
});

export const initializeBlogDetail = createAction('INITIALIZE_BLOG_DETAIL', id => async dispatch => {
	await dispatch(getNewsDetail(id));
});

export const cleanNews = createAction('CLEAN_NEWS');

const defaultMetaData = {
	current_page: 0,
	from: 0,
	last_page: 0,
	per_page: 0,
	to: 0,
	total: 0,
};

const defaultNewsDetailData = {
	id: 0,
	cover: '',
	title: '',
	subtitle: '',
	type: '',
	status: '',
	weight: 0,
	publishTime: '',
};

const reducer = {
	news: handleActions(
		{
			GET_MEDIA_TYPE_PENDING: state => ({
				...state,

				mediaTypes: [],
				loading: true,
			}),

			GET_MEDIA_TYPE_FULFILLED: (state, action) => ({
				...state,

				mediaTypes: action.payload,
				loading: false,
			}),

			GET_NEWS_PENDING: state => ({
				...state,

				newsList: [],
				meta: defaultMetaData,
				loading: true,
			}),

			GET_NEWS_FULFILLED: (state, action) => ({
				...state,

				newsList: action.payload.data,
				meta: action.payload.meta,
				loading: false,
			}),

			GET_NEWS_DETAIL_PENDING: state => ({
				...state,

				newsDetail: defaultNewsDetailData,
				loading: true,
			}),

			GET_NEWS_DETAIL_FULFILLED: (state, action) => ({
				...state,

				newsDetail: action.payload,
				loading: false,
			}),
		},
		{
			mediaTypes: [],
			newsList: [],
			newsDetail: defaultNewsDetailData,
			meta: defaultMetaData,
			loading: false,
		},
	),
};

const selectNews = state => state.news;

export const useNews = () =>
	useRedux(selectNews, { getMediaType, getNews, getNewsDetail, cleanNews });

export default { reducer };
