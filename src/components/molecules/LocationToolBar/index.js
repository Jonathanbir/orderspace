/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable object-shorthand */
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useMedia } from 'util/hook/useMedia';

import DropdownClass from 'components/atoms/DropdownClass';
import Dropdown from 'components/atoms/Dropdown';
import SearchBar from 'components/atoms/SearchBar';

import styles from './index.css';

const LocationToolBar = ({
	locationList,
	districtOptions,
	getLocation = () => {},
	areaOptions,
	setArea,
	setOpt,
	opt,
	option,
	area,
	district,
	selected,
	change,
	loading,
	citySelected,
	areaSelected,
	setMode = () => {},
	setSearch = () => {},
	setOption = () => {},
	setChange = () => {},
	setAreaSelected = () => {},
	setCitySelected = () => {},
}) => {
	const media = useMedia();
	const [active, setActive] = useState(false);
	const [cityActive, setCityActive] = useState(false);
	const [areaActive, setAreaActive] = useState(false);

	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		if (media === 'phone') {
			window.addEventListener('scroll', () => {
				if (window.pageYOffset > 180) {
					setScroll(true);
				} else {
					setScroll(false);
				}
			});
		}
	}, [scroll, media === 'phone']);

	useEffect(() => {
		if (opt === true) {
			setOption([...districtOptions.map((val, idx) => ({ value: idx, label: val }))]);
		}
	}, [opt === true]);

	const filterOptions = [...districtOptions.map((val, idx) => ({ value: idx, label: val }))];

	return (
		<div className={classnames(styles.toolBar, { [styles.scroll]: scroll && media === 'phone' })}>
			<div className={styles.dropdownContent}>
				<div className={styles.dropdown}>
					<DropdownClass
						className={classnames(styles.filterDropdown, styles.marginRight, cityActive === false)}
						arrowClassName={styles.arrowdrop}
						valueClassName={styles.filterDropdownValue}
						panelClassName={styles.filterDropdownPanel}
						options={areaOptions}
						value={
							citySelected
								? [{ value: area, label: citySelected }]
								: [{ value: 0, label: '請選擇縣市' }]
						}
						defaultValue={[]}
						opt={opt}
						onOpen={() => {
							setOpt(true);
							setChange(false);
							setSearch(false);
							setCityActive(true);
						}}
						onClose={() => {
							setOpt(false);
							setSearch(false);
							setCityActive(false);
						}}
						onChange={e => {
							setCitySelected(e[0].label);
							setMode(true);
							getLocation({
								city: e[0].label,
							});
							setArea(e[0].value);
							setSearch(false);
						}}
						cityActive={cityActive}
					/>
				</div>
				<div className={styles.dropdown}>
					<Dropdown
						className={classnames(styles.filterDropdown, cityActive === false)}
						valueClassName={styles.filterDropdownValue}
						type="location"
						panelClassName={styles.filterDropdownPanel}
						options={option}
						defaultValue={[]}
						value={
							areaSelected
								? filterOptions.filter(fo => fo.label === areaSelected)
								: [{ value: 0, label: '請選擇行政區' }]
						}
						onChange={e => {
							setChange(true);
							setAreaSelected(e[0].label);
							setSearch(false);
							getLocation({
								area: locationList.area,
								district: e[0].label,
							});
						}}
						onOpen={() => {
							if (change === false) {
								setOpt(true);
							} else {
								setOpt(false);
							}
							setAreaActive(true);
						}}
						onClose={() => {
							setOpt(false);
							setAreaActive(false);
						}}
						areaActive={areaActive}
					/>
				</div>
			</div>
			<SearchBar
				id="locationSearchbar"
				setActive={setActive}
				type="loction"
				active={active}
				loading={loading}
				showBtn={true}
				getLocation={getLocation}
				setSearch={setSearch}
				setAreaSelected={setAreaSelected}
				setCitySelected={setCitySelected}
				locationList={locationList}
				citySelected={citySelected}
				areaSelected={areaSelected}
			/>
		</div>
	);
};

export default LocationToolBar;
