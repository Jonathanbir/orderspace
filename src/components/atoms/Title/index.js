import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const Title = ({ className, titleEn, titleTw, circle }) => (
	<div className={classnames(styles.title, className)}>
		<h2>{titleEn}</h2>
		<h2>{titleTw}</h2>
		<div className={styles.circle}>{circle}</div>
	</div>
);

export default Title;
