import React from 'react';

import AboutBanner from 'components/molecules/AboutBanner';
import AboutCompanyProfile from 'components/molecules/AboutCompanyProfile';
import AboutMilestone from 'components/molecules/AboutMilestons';

import styles from './index.css';

const Story = () => {
	const data = [
		{ name: '榮獲商業總會金商獎/經濟部優良商人獎/新契約保費突破 10 億', year: '2021', image: '' },
		{ name: '榮獲商業總會金商獎/經濟部優良商人獎/新契約保費突破 10 億', year: '2021', image: '' },
	];
	return (
		<div className={styles.story}>
			<AboutBanner />
			<AboutCompanyProfile />
			<AboutMilestone data={data} />
		</div>
	);
};

export default Story;
