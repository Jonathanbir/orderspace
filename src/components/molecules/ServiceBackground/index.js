import React from 'react';

import DecoServiceLeft from 'images/icon/deco-service-left.inline.svg';
import DecoServiceRight from 'images/icon/deco-service-right.inline.svg';

import styles from './index.css';

const ServiceBackground = () => {
	return (
		<div className={styles.serviceBackground}>
			<div>
				<DecoServiceLeft />
			</div>
			<div>
				<DecoServiceRight />
			</div>
		</div>
	);
};

export default ServiceBackground;
