import React from 'react';

export default {
	path: '/news',
	components: () => [],
	render: (_, children) => children,
	children: [
		{
			path: '',
			components: () => [import('./List')],
			render: ([News]) => <News />,
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
