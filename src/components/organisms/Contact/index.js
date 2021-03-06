/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';

import { scrollToOffset } from 'util/helper';

import ContactBoard from 'components/molecules/ContactBoard';

import styles from './index.css';

const Contact = () => {
	useEffect(() => {
		scrollToOffset(0);
	}, []);

	return (
		<div className={styles.contactWrapper}>
			<div className={styles.contactContainer}>
				<div className={styles.banner}>
					<h1>Contact</h1>
				</div>
			</div>
			<div className={styles.contact}>
				<ContactBoard />
			</div>
			<div className={styles.upBtn} type="outlined" onClick={() => scrollToOffset(0)} />
		</div>
	);
};

export default Contact;
