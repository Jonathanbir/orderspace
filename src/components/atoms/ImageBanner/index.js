import React from 'react';
import classnames from 'classnames';

import BannerImg from 'images/banner/banner.jpg';

import styles from './index.css';

const ImageBanner = ({ className }) => {
	return (
		<div
			className={classnames(styles.imageBanner, className)}
			style={{
				backgroundImage: `url(${BannerImg})`,
			}}
		/>
	);
};

export default ImageBanner;
