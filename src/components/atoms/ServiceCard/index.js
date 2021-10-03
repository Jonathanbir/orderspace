/* eslint-disable indent */
import React from 'react';
import classnames from 'classnames';
import qs from 'qs';

import { useRouting } from 'models/routing';

import styles from './index.css';

const { IMAGE_ENDPOINT } = process.env;

const ServiceCard = ({ className, data, blur = false }) => {
	const [, { pushRoute }] = useRouting();

	return (
		<div
			className={
				data.name === '保單健檢'
					? classnames(styles.serviceCard, styles.insuranceCard, blur && styles.blur, className)
					: classnames(styles.serviceCard, blur && styles.blur, className)
			}
			role="button"
			tabIndex={0}
			onKeyPress={() => {}}
			onClick={() => {
				if (data.svy_url) {
					window.open(data.svy_url, '_blank').focus();
				} else {
					pushRoute({
						pathname: '/services/intro',
						search: qs.stringify({ type: data.type }, { addQueryPrefix: true }),
						state: { name: data.name },
					});
				}
			}}
		>
			<div className={styles.content}>
				<div
					className={styles.img}
					style={{ backgroundImage: `url(${IMAGE_ENDPOINT}/${data.icon})` }}
				/>
				<h2
					className={
						data.name === '保單健檢'
							? classnames(styles.h2, styles.insuranceTitle, className)
							: classnames(styles.h2, className)
					}
				>
					{data.name}
				</h2>
				<p>{data.description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
