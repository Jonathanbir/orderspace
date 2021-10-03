import React from 'react';

import styles from './index.css';

const ProductCard = ({ data }) => (
	<div className={styles.productCard}>
		<div className={styles.productImg}>
			<div
				className={styles.img}
				style={{
					backgroundImage: `url(${data.img})`,
				}}
			>
				<div className={styles.productText}>BUY</div>
			</div>
		</div>
		<h2>{data.title}</h2>
		<p>{data.price}</p>
	</div>
);

export default ProductCard;
