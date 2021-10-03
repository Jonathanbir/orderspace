import React from 'react';

import ShopCardsGroup from 'components/molecules/ShopCardsGroup';

import styles from './index.css';

const ShopSection = () => {
	return (
		<div className={styles.shopWrapper}>
			<div className={styles.shopContainer}>
				<div className={styles.shop}>
					<ShopCardsGroup />
					<div className={styles.square} />
				</div>
			</div>
		</div>
	);
};

export default ShopSection;
