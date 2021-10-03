import React from 'react';

import styles from './index.css';

const ServiceContent = ({ title, content }) => {
	return (
		<div className={styles.serviceContent}>
			<div>
				<h3>{title}</h3>
				<div className={styles.line} />
			</div>
			<div>{content}</div>
		</div>
	);
};

export default ServiceContent;
