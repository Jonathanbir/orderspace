/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { v4 } from 'uuid';

import styles from './index.css';

const EditInput = ({ add }) => {
	const [note, setNote] = useState('');

	const noteChange = e => {
		setNote(e.target.value);
	};

	const addItem = () => {
		add(function(prevData) {
			return [{ id: v4(), note }, ...prevData];
		});
	};
	return (
		<div className={styles.editInput}>
			<h1>Message Board</h1>
			<p>please type sometings to us, we will feedback as soon as We can.</p>
			<div className={styles.textInput}>
				<input type="text" value={note} onChange={noteChange} />
				<div className={styles.submitBtn} onClick={addItem}>
					Submit
				</div>
			</div>
		</div>
	);
};

export default EditInput;
