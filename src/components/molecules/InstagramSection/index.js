/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
import React from 'react';
import classnames from 'classnames';
import styles from './index.css';

const ShowContent = () => {
	return (
		<div className={styles.instagramContent}>
			<div className={styles.instagramBlack} />
			<div className={styles.instagramContainer}>
				<h2>Instagram</h2>
				<div className={styles.instagram}>
					<div className={styles.instagramRow}>
						<div className={classnames(styles.instagramPic, styles.instagramPic01)} />
						<div className={classnames(styles.instagramPic, styles.instagramPic02)} />
						<div className={classnames(styles.instagramPic, styles.instagramPic03)} />
					</div>
					<div className={styles.instagramRow}>
						<div className={classnames(styles.instagramPic, styles.instagramPic04)} />
						<div className={classnames(styles.instagramPic, styles.instagramPic05)} />
						<div className={classnames(styles.instagramPic, styles.instagramPic06)} />
					</div>
					<div className={styles.instagramRow}>
						<div className={classnames(styles.instagramPic, styles.instagramPic07)} />
						<div className={classnames(styles.instagramPic, styles.instagramPic08)} />
						<div className={classnames(styles.instagramPic, styles.instagramPic09)} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShowContent;
