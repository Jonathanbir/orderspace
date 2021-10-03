/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
import React from 'react';

import LocationCard from 'components/atoms/LocationCard';

import styles from './index.css';

const LocationInformationGroup = ({ data }) => {
	return (
		<div className={styles.wrapper} style={data.length > 0 ? { width: '100%' } : {}}>
			{data.map((_card, idx) => (
				<LocationCard idx={idx} data={_card} />
			))}
		</div>
	);
};

export default LocationInformationGroup;
