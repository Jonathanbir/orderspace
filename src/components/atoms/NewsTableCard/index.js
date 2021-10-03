/* eslint-disable indent */
import React from 'react';
import classnames from 'classnames';
import dayjs from 'dayjs';

import Link from 'components/atoms/Link';
import Button from 'components/atoms/Button';
import Tag from 'components/atoms/Tag';

import styles from './index.css';

const { SELF_HOST_ENDPOINT } = process.env;

const NewsTableCard = ({ className, blur, data }) => {
	const { cover, img1, img2, id, status, subtitle, title, type, publishTime } = data;
	console.log(SELF_HOST_ENDPOINT);
	return (
		<Link to={`/news/${id}`}>
			<div
				className={classnames(styles.listCard, blur && styles.blur, className)}
				style={status === 'ONLINE' ? { display: 'block' } : { display: 'none' }}
			>
				<div className={styles.squareBox}>
					<img src={`${img1}`} alt="" />
					<img src={`${img2}`} alt="" />
				</div>
			</div>
		</Link>
	);
};

export default NewsTableCard;
