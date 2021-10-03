import React from 'react';

import styles from './index.css';

const PageTitle = ({ titleEn, titleTw }) => (
	<div className={styles.pageTitle}>
		<h1>{titleEn}</h1>
		<h1>{titleTw}</h1>
	</div>
);

export default PageTitle;
