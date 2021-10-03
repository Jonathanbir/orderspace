import React from 'react';

import styles from './index.css';

const ShopCard = ({ data }) => (
	<div className={styles.shopCard}>
		<h2>{data.title}</h2>
		<div
			className={styles.img}
			style={{
				backgroundImage: `url(${data.img})`,
			}}
		/>
	</div>
);

export default ShopCard;
