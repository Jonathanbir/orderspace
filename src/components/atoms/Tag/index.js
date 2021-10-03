import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const Tag = ({ className, tags, onClick = () => {} }) => (
	<div
		className={classnames(styles.tag, className)}
		role="button"
		tabIndex={0}
		onKeyPress={() => {}}
		onClick={e => {
			e.stopPropagation();
			e.preventDefault();
			onClick();
		}}
	>
		{tags}
	</div>
);

export default Tag;
