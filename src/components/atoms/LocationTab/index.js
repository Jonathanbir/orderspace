/* eslint-disable no-mixed-operators */
import React, { useRef, useState, useEffect } from 'react';
import classnames from 'classnames';

import { useMedia, useWindowSize } from 'util/hook/useMedia';

import styles from './index.css';

const LocationTab = ({
	className,
	tabs = [],
	fullWidth,
	getLocation = () => {},
	setSelected = () => {},
	setMode = () => {},
	setMove = () => {},
	setOpt = () => {},
	setTarget = () => {},
	setSearch = () => {},
	setChange = () => {},
	setAreaSelected = () => {},
	areaOptions,
	cityOptions,
	target,
	mode,
	move,
	area,
	district,
	search,
	selected = 0,
}) => {
	const media = useMedia();
	const [width] = useWindowSize();
	const wrapperRef = useRef();
	const tabRef = useRef();
	const [wrapperLeft, setWrapperLeft] = useState(0);

	useEffect(() => {
		if (wrapperRef.current) {
			setWrapperLeft(wrapperRef.current.getBoundingClientRect().x);
		}
	}, [width]);

	useEffect(() => {
		if (mode === true) {
			switch (district) {
				case 1:
				case 3:
				case 4:
				case 6:
					setMove((parseInt(area, 10) % 3) * 96);
					setSelected(parseInt(area, 10) % 3);
					break;
				case 2:
					setMove((parseInt(area, 10) % 12) * 96);
					setSelected(parseInt(area, 10) % 12);
					break;
				case 5:
					setMove((parseInt(area, 10) % 16) * 96);
					setSelected(parseInt(area, 10) % 16);
					break;
				case 7:
					setMove((parseInt(area, 10) % 18) * 96);
					setSelected(parseInt(area, 10) % 18);
					break;
				default:
			}
		}
	}, [selected, district, area]);

	useEffect(() => {
		if (tabRef.current) {
			if (mode === true) {
				if (media === 'phone') {
					setTarget({
						x: 20 + move,
						width: tabRef.current.getBoundingClientRect().width,
					});
				} else {
					setTarget({
						x: 879.5 + move,
						width: tabRef.current.getBoundingClientRect().width,
					});
				}
			} else if (media === 'phone') {
				setTarget({
					x: 20 + selected * 96,
					width: tabRef.current.getBoundingClientRect().width,
				});
			} else {
				setTarget({
					x: tabRef.current.getBoundingClientRect().x + move,
					width: tabRef.current.getBoundingClientRect().width,
				});
			}
		}
	}, [selected, width, area, move]);

	return (
		<div className={classnames(styles.wrapper, className)} ref={wrapperRef}>
			<ul
				className={
					fullWidth === true ? classnames(styles.container, styles.fullWidth) : styles.container
				}
			>
				{tabs.map((t, idx) => (
					<li
						role="tab"
						key={t}
						className={classnames(styles.tabItem, { [styles.selected]: selected === idx })}
						style={search === true ? { display: 'none' } : {}}
						onClick={() => {
							setSelected(idx);
							setMove(0);
							setMode(false);
							setSearch(false);
							setOpt(false);
							setChange(false);
							setAreaSelected();
							if (areaOptions[district].items[selected].label !== cityOptions[idx]) {
								getLocation({
									city: cityOptions[idx],
								});
							}
						}}
						tabIndex={idx}
						ref={selected === idx ? tabRef : null}
						onKeyPress={() => {}}
					>
						{t}
					</li>
				))}
				<li
					className={styles.slider}
					style={
						search === true
							? { display: 'none' }
							: { left: target.x - wrapperLeft, width: target.width }
					}
				/>
			</ul>
		</div>
	);
};

export default LocationTab;
