import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import Dropdown, { DropdownField } from 'components/atoms/Dropdown';

const stories = storiesOf('common|atoms/Dropdown', module);

const options = [
	{ value: 'taipei', label: '台北市' },
	{ value: 'taichung', label: '台中市' },
	{ value: 'tainan', label: '台南市' },
	{ value: 'kaohsiung', label: '高雄市' },
	{ value: 'hualien', label: '花蓮縣' },
];

const selectedOptions = [{ value: 'taipei', label: '台北市' }];

stories.add('__interactive', () => (
	<Dropdown
		placeholder="請選擇縣市"
		disabled={boolean('disabled', false)}
		error={boolean('error', false)}
		options={object('list', options)}
		defaultValue={object('selected value', selectedOptions)}
		onChange={action('onChange')}
	/>
));

stories.add('with placeholder', () => (
	<Dropdown
		placeholder="請選擇縣市"
		disabled={boolean('disabled', false)}
		options={options}
		defaultValue={[]}
	/>
));

stories.add('dropdown with status', () => (
	<DropdownField
		placeholder="請選擇縣市"
		label={text('label', '通訊地址')}
		disabled={boolean('disabled', false)}
		required={boolean('required', true)}
		options={object('list', options)}
		defaultValue={object('selected value', selectedOptions)}
		onChange={action('onChange')}
		statusComponent={() => <>狀態</>}
	/>
));

stories.add('dropdown field', () => (
	<DropdownField
		placeholder="請選擇縣市"
		label={text('label', '通訊地址')}
		disabled={boolean('disabled', false)}
		required={boolean('required', true)}
		options={object('list', options)}
		defaultValue={object('selected value', selectedOptions)}
		onChange={action('onChange')}
	/>
));
