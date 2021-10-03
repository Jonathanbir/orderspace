import React from 'react';

export default {
	path: '/shop',
	components: () => [],
	render: (_, children) => children,
	children: [
		{
			path: '',
			components: () => [import('./List')],
			render: ([Shop]) => <Shop />,
		},
		{
			path: '/:id',
			components: () => [],
			render: (_, children) => children,
			children: [
				{
					path: '',
					components: () => [import('./Content')],
					render: ([Content]) => <Content />,
				},
			],
		},
	],
};
