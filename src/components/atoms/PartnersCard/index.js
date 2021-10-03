/* eslint-disable indent */
import React from 'react';

import styles from './index.css';

const { IMAGE_ENDPOINT } = process.env;

const PartnersCard = ({
	data,
	idx,
	isEmpty,
	setHovered = () => {},
	setHover = () => {},
	type,
	setClosed = () => {},
}) => (
	<div
		className={styles.partnersCard}
		style={type === 'partner' ? { margin: '52px 15px' } : { margin: '40px 24px' }}
		onMouseOver={() => {
			if (setHovered) {
				setHovered(idx);
				setHover(idx);
			}
		}}
		onFocus={() => {}}
		role="button"
		tabIndex={0}
		onKeyPress={() => {}}
		onClick={() => setClosed(idx)}
	>
		<div
			className={styles.img}
			style={
				!isEmpty
					? {
							backgroundImage: `url(${IMAGE_ENDPOINT}/${data.logo})`,
					  }
					: { display: 'none' }
			}
		/>
	</div>
);

export default PartnersCard;
