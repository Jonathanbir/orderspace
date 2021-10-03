import React, { useState, useEffect } from 'react';

import EditInput from 'components/atoms/EditInput';
import InputList from 'components/atoms/InputList';

import styles from './index.css';

const ContactBoard = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/posts/1').then(res =>
			res.json().then(data => console.log('data', data)),
		);
	}, []);

	return (
		<div className={styles.brandWrapper}>
			<EditInput add={setData} />
			<InputList listData={data} deleteData={setData} />
		</div>
	);
};

export default ContactBoard;
