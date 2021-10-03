import React from 'react';
import { storiesOf } from '@storybook/react';

import Pagination from 'components/molecules/Pagination';

const stories = storiesOf('shop|molecules/Pagination', module);

stories.add('__interactive', () => <Pagination activePage={1} pages={5} />, {
	jest: 'Pagination',
});
