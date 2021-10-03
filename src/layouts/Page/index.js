import React from 'react';

import styles from './index.css';

const PageLayout = ({ Content }) => () => (
	<div className={styles.pageLayout}>
		<Content />
	</div>
);
export default PageLayout;
