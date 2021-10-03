import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const { IMAGE_ENDPOINT } = process.env;

const ServiceIntroCard = ({ data, centerSelected, centerLeftSelected, centerRightSelected }) => {
	return (
		<div
			className={classnames(styles.serviceIntroCard, {
				[styles.centerSelected]: centerSelected,
				[styles.centerLeftSelected]: centerLeftSelected,
				[styles.centerRightSelected]: centerRightSelected,
				[styles.svy]: data.svy_url,
				[styles.hide]: data.isEmpty,
			})}
		>
			<div style={{ backgroundImage: `url('${IMAGE_ENDPOINT}/${data.icon}')` }} />
			<h3>{data.name}</h3>
			<p>{data.description}</p>
		</div>
	);
};

export default ServiceIntroCard;
