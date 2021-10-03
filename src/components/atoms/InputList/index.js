import React from 'react';

import ListItem from 'components/atoms/ListItem';

import styles from './index.css';

const InputList = ({ listData, deleteData }) => {
	return (
		<div className={styles.brandWrapper}>
			{listData.map(item => {
				const { note, id } = item;
				return <ListItem id={id} key={id} note={note} deleteData={deleteData} />;
			})}
		</div>
	);
};

export default InputList;
