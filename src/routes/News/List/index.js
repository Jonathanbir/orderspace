import { hot } from 'react-hot-loader/root';

import News from 'components/organisms/News';

import PageLayout from 'layouts/Page';

export default hot(PageLayout({ Content: News }));
