import React from 'react';

import ArrowDownIcon from 'images/icon/arrow-down.inline.svg';

import styles from './index.css';

const AboutBanner = () => {
	return (
		<div className={styles.aboutBanner}>
			<video autoPlay muted>
				<source
					src="https://hib-official-dev.25demo.com/s3/video/hib-advertising.mp4"
					type="video/mp4"
				/>
			</video>
			<ArrowDownIcon />
			<button type="button">Scroll</button>
		</div>
	);
};

export default AboutBanner;
