import { hot } from 'react-hot-loader/root';

import NewsContent from 'components/organisms/NewsContent';

import PageLayout from 'layouts/Page';

export default hot(PageLayout({ Content: NewsContent }));
