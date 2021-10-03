import React from 'react';

export default {
	path: '/brand',
	components: () => [],
	render: (_, children) => children,
	children: [
		{
			path: '',
			components: () => [import('./component')],
			render: ([Brand]) => <Brand />,
		},
	],
};
