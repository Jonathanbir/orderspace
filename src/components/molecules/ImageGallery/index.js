/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import classnames from 'classnames';

import { useMedia } from 'util/hook/useMedia';

import styles from './index.css';

const ImageGallery = ({ tabSelected, images }) => {
	const media = useMedia();

	return (
		<div className={styles.imageGalleryWrapper}>
			<div
				className={styles.imageItems}
				style={{
					backgroundImage: `url(${
						images[tabSelected] !== undefined ? images[tabSelected] : images[0]
					})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'center',
				}}
			/>
		</div>
	);
};

export default ImageGallery;
