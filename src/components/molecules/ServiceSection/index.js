import React, { useState } from 'react';

import Title from 'components/atoms/Title';
import Tab from 'components/atoms/Tab';
import ServiceCardsGroup from 'components/molecules/ShopGroup';

import Circle from 'images/icon/circle-1.inline.svg';

import styles from './index.css';

const ServiceSection = () => {
	const [selected, setSelected] = useState(0);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Title className={styles.title} titleEn="SERVICE" titleTw="服務介紹" circle={<Circle />} />
				<Tab selected={selected} setSelected={setSelected} tabs={['壽險', '產險']} />
				<ServiceCardsGroup tabSelected={selected} />
			</div>
		</div>
	);
};

export default ServiceSection;
