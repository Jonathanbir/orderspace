import React from 'react';

import styles from './index.css';

const ListItem = ({ id, note, deleteData }) => {
	const deleteItem = () => {
		deleteData(function(prev) {
			return prev.filter(item => item.id !== id);
		});
	};
	return (
		<div className={styles.listItem}>
			<p>{note}</p>
			<div className={styles.deleteBtn} onClick={deleteItem}>
				Delete
			</div>
		</div>
	);
};

export default ListItem;
