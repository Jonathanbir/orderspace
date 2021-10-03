import React, { useRef, useState, useEffect } from 'react';
import classnames from 'classnames';

import { useWindowSize } from 'util/hook/useMedia';

import styles from './index.css';

const Tab = ({ className, tabs = [], selected = 0, fullWidth, setSelected = () => {} }) => {
	const [width] = useWindowSize();
	const wrapperRef = useRef();
	const tabRef = useRef();
	const [wrapperLeft, setWrapperLeft] = useState(0);
	const [target, setTarget] = useState({ x: 0, width: 0 });

	useEffect(() => {
		if (wrapperRef.current) {
			setWrapperLeft(wrapperRef.current.getBoundingClientRect().x);
		}
	}, [width]);

	useEffect(() => {
		if (tabRef.current) {
			setTarget({
				x: tabRef.current.getBoundingClientRect().x,
				width: tabRef.current.getBoundingClientRect().width,
			});
		}
	}, [selected, width]);

	return (
		<div className={classnames(styles.tabWrapper, className)} ref={wrapperRef}>
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
						onClick={() => setSelected(idx)}
						tabIndex={idx}
						ref={selected === idx ? tabRef : null}
						onKeyPress={() => {}}
					>
						{t}
					</li>
				))}
				<li
					className={styles.slider}
					style={{ left: target.x - wrapperLeft, width: target.width }}
				/>
			</ul>
		</div>
	);
};

export default Tab;
