/* eslint-disable no-mixed-operators */
import React, { useState, useMemo } from 'react';

import { useHome } from 'models/home';

import Title from 'components/atoms/Title';
import Tab from 'components/atoms/Tab';
import PartnersCardsGroup from 'components/molecules/PartnersCardsGroup';

import Circle from 'images/icon/circle-5.inline.svg';

import styles from './index.css';

let newArrangmentArray = [];

const emptyData = {
	address: '',
	logo: '',
	name: '',
	phone: '',
	status: '',
	type: '',
	weight: '',
	isEmpty: true,
};

const NewArrangement = (newData, newDataLength) => {
	const n = Math.floor(newDataLength / 8);
	switch (newDataLength % 8) {
		case 1:
			newArrangmentArray = [...newData.slice(0, n * 8 + 1)];
			for (let i = 1; i <= 7; i += 1) {
				newArrangmentArray.push(emptyData);
			}
			break;
		case 2:
			newArrangmentArray = [...newData.slice(0, n * 8 + 1), emptyData, newData[n * 8 + 1]];
			for (let i = 1; i <= 5; i += 1) {
				newArrangmentArray.push(emptyData);
			}
			break;
		case 3:
			newArrangmentArray = [
				...newData.slice(0, n * 8 + 1),
				emptyData,
				newData[n * 8 + 1],
				emptyData,
				newData[n * 8 + 2],
			];
			for (let i = 1; i <= 3; i += 1) {
				newArrangmentArray.push(emptyData);
			}
			break;
		case 4:
			newArrangmentArray = [
				...newData.slice(0, n * 8 + 1),
				emptyData,
				newData[n * 8 + 1],
				emptyData,
				newData[n * 8 + 2],
				emptyData,
				newData[n * 8 + 3],
				emptyData,
			];
			break;
		case 5:
			newArrangmentArray = [
				...newData.slice(0, n * 8 + 2),
				newData[(0, n * 8 + 2)],
				emptyData,
				newData[(0, n * 8 + 3)],
				emptyData,
				newData[(0, n * 8 + 4)],
				emptyData,
			];
			break;
		case 6:
			newArrangmentArray = [
				...newData.slice(0, n * 8 + 4),
				newData[(0, n * 8 + 4)],
				emptyData,
				newData[(0, n * 8 + 5)],
				emptyData,
			];
			break;
		case 7:
			newArrangmentArray = [...newData.slice(0, n * 8 + 6), newData[(0, n * 8 + 6)], emptyData];
			break;
		default:
			newArrangmentArray = newData;
	}
};

const PartnersSection = () => {
	const [selected, setSelected] = useState(0);
	const [{ partnerList }] = useHome();
	const filteredList = useMemo(() => {
		const newData = partnerList.filter(p => p.type === (selected === 0 ? 'NORMAL' : 'PROPERTY'));
		const newDataLength = partnerList.filter(
			p => p.type === (selected === 0 ? 'NORMAL' : 'PROPERTY'),
		).length;

		NewArrangement(newData, newDataLength);
		return newArrangmentArray;
	}, [selected]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Title className={styles.title} titleEn="PARTNERS" titleTw="合作夥伴" circle={<Circle />} />
				<Tab
					className={styles.toolBar}
					selected={selected}
					setSelected={setSelected}
					tabs={['保險公司', '產物保險公司']}
				/>
				<PartnersCardsGroup type="home" tabSelected={selected} data={filteredList} />
			</div>
		</div>
	);
};

export default PartnersSection;
