/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
import React from 'react';

import Button from 'components/atoms/Button';

import styles from './index.css';

const ShowContent = () => {
	return (
		<div className={styles.showContent}>
			<h3>SHOW</h3>
			<div className={styles.showVideo}>
				<iframe
					width="100%"
					height="380"
					src="https://www.youtube.com/embed/C89jkwr_wXk"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
				<div className={styles.showText}>
					<h2>New Show Is Coming Now!</h2>
					<p>
						new stuff is coming.just prepare the money and buy .just prepare tey and buy.just
						prepare the money and buy .just prepare the money and buy!.just prepare the money and
						buy new stu the money and buy!
					</p>
					<Button className={styles.moreButton} variant="text" onClick={() => {}}>
						Choose another show
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ShowContent;
