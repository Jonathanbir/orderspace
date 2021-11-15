import React from 'react';

import NewsRoute from './News';
import ShopRoute from './Shop';
import BrandRoute from './Brand';
import ShowRoute from './Show';
import ContactRoute from './Contact';
import LoginRoute from './Login';

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
		},
		NewsRoute,
		ShopRoute,
		BrandRoute,
		ContactRoute,
		ShowRoute,
		LoginRoute,
	],
};

export default routes;
