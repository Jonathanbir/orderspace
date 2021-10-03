import React from 'react';

import styles from './index.css';

const ReportsSubTitle = ({ name }) => {
	return (
		<div className={styles.reportsSubTitle}>
			<span>{name}</span>
		</div>
	);
};

export default ReportsSubTitle;
