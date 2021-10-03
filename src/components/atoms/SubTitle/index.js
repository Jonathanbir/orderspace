import React from 'react';

import styles from './index.css';

const SubTitle = ({ titleTw, titleEn }) => (
	<div className={styles.subTitle}>
		<p>{titleTw}</p>
		<p>{titleEn}</p>
	</div>
);

export default SubTitle;
