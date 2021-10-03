/* eslint-disable indent */
import React from 'react';
import classnames from 'classnames';
import dayjs from 'dayjs';

import Link from 'components/atoms/Link';
import Button from 'components/atoms/Button';
import Tag from 'components/atoms/Tag';

import styles from './index.css';

const { SELF_HOST_ENDPOINT } = process.env;

const NewsArrivalsCard = ({ className, blur, data }) => {
	const { img, img1, img2, img3, id, status, title, price } = data;
	console.log(SELF_HOST_ENDPOINT);
	return (
		<Link to={`/news/${id}`}>
			<div
				className={classnames(styles.listCard, blur && styles.blur, className)}
				style={status === 'ONLINE' ? { display: 'block' } : { display: 'none' }}
			>
				<div className={styles.squareBox}>
					<div className={styles.squareBox1}>
						<img src={`${img}`} alt="" />
					</div>
					<div className={styles.squareBox2}>
						<img src={`${img1}`} alt="" />
						<img src={`${img2}`} alt="" />
						<img src={`${img3}`} alt="" />
					</div>
				</div>
			</div>
		</Link>
	);
};

export default NewsArrivalsCard;
