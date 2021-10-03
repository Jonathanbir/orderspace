import React from 'react';

export default {
	path: '/contact',
	components: () => [],
	render: (_, children) => children,
	children: [
		{
			path: '',
			components: () => [import('./component')],
			render: ([Contact]) => <Contact />,
		},
	],
};
