/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Tab from 'components/atoms/Tab';
import ShopGroup from 'components/molecules/ShopGroup';

import { scrollToOffset } from 'util/helper';

import styles from './index.css';

const mapStateToProps = state => {
	return { clothes: state.clothes };
};

const ShopContent = props => {
	const [selected, setSelected] = useState(0);

	useEffect(() => {
		scrollToOffset(0);
	}, []);

	return (
		<div className={styles.shopContent}>
			<div className={styles.shopContainer}>
				<div className={styles.banner}>
					<h1>SHOP</h1>
				</div>
				<div className={styles.shopTab}>
					<Tab
						selected={selected}
						setSelected={setSelected}
						tabs={['New Arrivals', 'Products', 'Information']}
					/>
					<ShopGroup tabSelected={selected} />
				</div>
			</div>
			<div className={styles.upBtn} type="outlined" onClick={() => scrollToOffset(0)} />
		</div>
	);
};

export default connect(mapStateToProps)(ShopContent);
