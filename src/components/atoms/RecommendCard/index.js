import React from 'react';

import styles from './index.css';

const RecommendCard = ({ data }) => (
	<div className={styles.recommendCard}>
		<div className={styles.productImg}>
			<div
				className={styles.img}
				style={{
					backgroundImage: `url(${data.img})`,
				}}
			>
				<div className={styles.productText}>GO</div>
			</div>
		</div>
	</div>
);

export default RecommendCard;
