import React from 'react';
import classnames from 'classnames';

import { isExist } from 'util/helper';

import styles from './index.css';

const SectionTitle = ({ className, title = '', color = '', vesShare = false }) => (
	<div
		className={classnames(
			styles.sectionTitle,
			isExist(color) && styles[color],
			vesShare && styles.vesShare,
			className,
		)}
	>
		<h1>{title}</h1>
		<div className={styles.hl} />
	</div>
);

export default SectionTitle;
