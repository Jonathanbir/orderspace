import React from 'react';
import { storiesOf } from '@storybook/react';

import DropdownBasic from 'components/atoms/DropdownBasic';

const stories = storiesOf('common|atoms/DropdownBasic', module);

stories.add('__interactive', () => (
	<DropdownBasic valueComponent={() => 'Hi'} panelComponent={() => 'This is example'} />
));
