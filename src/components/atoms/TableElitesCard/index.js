import React from 'react';
import classnames from 'classnames';

import Link from 'components/atoms/Link';

import styles from './index.css';

const { IMAGE_ENDPOINT } = process.env;

const TableElitesCard = ({ className, blur, idx, data }) => (
	<Link to={`/elites/${data.id}`}>
		<div className={classnames(styles.listCard, blur && styles.blur, className)}>
			<div
				className={styles.cardImg}
				style={{ backgroundImage: `url(${IMAGE_ENDPOINT}/${data.cover})` }}
			/>
			<div className={styles.content} style={idx === 0 ? { backgroundImage: 'initial' } : {}}>
				<div className={styles.cardTitle}>
					<p>{data.jobTitle}</p>
					<h2>{data.name}</h2>
				</div>
			</div>
			<p>目標決定高度 選對實踐的舞台成就非凡人生</p>
		</div>
	</Link>
);

export default TableElitesCard;
