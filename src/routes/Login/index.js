import React from 'react';

export default {
	path: '/login',
	components: () => [],
	render: (_, children) => children,
	children: [
		{
			path: '',
			components: () => [import('./component')],
			render: ([Login]) => <Login />,
		},
	],
};
