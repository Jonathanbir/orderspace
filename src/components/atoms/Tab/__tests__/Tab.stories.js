import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

import Tab from 'components/atoms/Tab';

const stories = storiesOf('common|atoms/Tab', module);

stories.add('__interactive', () => (
	<Tab tabs={['壽險', '產險']} selected={select('tab', [0, 1])} setSelected={action('onClick')} />
));
