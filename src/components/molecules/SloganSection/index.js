import React from 'react';

import DecoBarsIcon from 'images/icon/deco-bars.inline.svg';
import SuperMan from 'images/index/image-superman.jpg';

import styles from './index.css';

const SloganSection = () => (
	<div className={styles.sloganSection}>
		<div className={styles.leftDeco} />
		<DecoBarsIcon className={styles.rightDeco} />
		<div className={styles.content}>
			<div className={styles.slogan}>
				<p>「信守約定，始終如一」</p>
				<p>你也能成為別人心中的巨人！</p>
			</div>
			<div className={styles.name}>
				<p>董事長</p>
				<p>王文全</p>
			</div>
		</div>
		<div className={styles.superMan} style={{ backgroundImage: `url(${SuperMan})` }} />
	</div>
);

export default SloganSection;
