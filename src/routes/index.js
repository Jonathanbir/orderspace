import React from 'react';

import { fetchHome } from 'models/home';

import NewsRoute from './News';
import ShopRoute from './Shop';
import BrandRoute from './Brand';
import ShowRoute from './Show';
import ContactRoute from './Contact';

const routes = {
	path: '/',
	components: () => [],
	render: (_, children) => children,
	onEnter: async ({ next }) => {
		const children = await next();

		return children;
	},
	children: [
		{
			path: '',
			components: () => [import(/* webpackChunkName: 'home' */ './Home')],
			render: ([Home]) => <Home />,
			onEnter: async ({ next, store }) => {
				await store.dispatch(fetchHome());
				const children = await next();

				return children;
			},
		},
		NewsRoute,
		ShopRoute,
		BrandRoute,
		ContactRoute,
		ShowRoute,
	],
};

export default routes;
