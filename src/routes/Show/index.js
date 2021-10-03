import React from 'react';

export default {
	path: '/show',
	components: () => [],
	render: (_, children) => children,
	children: [
		{
			path: '',
			components: () => [import('./component')],
			render: ([Show]) => <Show />,
		},
	],
};
