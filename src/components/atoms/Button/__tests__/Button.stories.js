import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Button, { ButtonLink } from 'components/atoms/Button';

const stories = storiesOf('common|atoms/Button', module);

stories.add(
	'__interactive',
	() => (
		<Button
			size={select('size', ['small', 'medium', 'large'], 'medium')}
			color={select('color', ['primary', 'vespa-red', 'customize'], 'primary')}
			variant={select('variant', ['normal', 'outlined', 'invert', 'text'], 'normal')}
			disabled={boolean('disabled', false)}
		>
			觀看更多
		</Button>
	),
	{
		redux: {
			data: {
				routing: {
					search: '',
				},
			},
		},
	},
);

stories.add(
	'button link',
	() => (
		<ButtonLink href="/test" type={select('type', ['internal', 'external'], 'internal')}>
			前往查看
		</ButtonLink>
	),
	{
		redux: {
			data: {
				routing: {
					search: '',
				},
			},
		},
	},
);
