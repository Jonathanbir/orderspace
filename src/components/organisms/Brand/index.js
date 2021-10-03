/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';

import { useMedia } from 'util/hook/useMedia';

import { scrollToOffset } from 'util/helper';

import styles from './index.css';

const Brand = () => {
	const media = useMedia();

	useEffect(() => {
		scrollToOffset(0);
	}, []);

	return (
		<div className={styles.brandWrapper}>
			<div className={styles.brandContainer}>
				<div className={styles.banner}>
					<h1>Brand</h1>
				</div>
			</div>
			<div className={styles.brand}>123</div>
			<div className={styles.upBtn} type="outlined" onClick={() => scrollToOffset(0)} />
		</div>
	);
};

export default Brand;
