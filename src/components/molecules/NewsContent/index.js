/* eslint-disable react/destructuring-assignment */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
import React from 'react';
import classnames from 'classnames';

import Button from 'components/atoms/Button';
import styles from './index.css';

const NewsContent = data => {
	return (
		<div className={classnames(styles.newsContent, data.data.classname)}>
			<div
				className={styles.img}
				style={{
					backgroundImage: `url(${data.data.img})`,
				}}
			/>
			<h3>{data.data.title}</h3>
			<p>{data.data.text}</p>
			<Button className={styles.moreButton} variant="text" onClick={() => {}}>
				MORE
			</Button>
		</div>
	);
};

export default NewsContent;
