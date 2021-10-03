/* eslint-disable no-nested-ternary */
import React, { useState, useMemo } from 'react';
import classnames from 'classnames';

import NewsArrivals from 'components/molecules/NewsArrivals';

import { useMedia } from 'util/hook/useMedia';

import ShopProductGroup from 'components/molecules/ShopProductGroup';
import ShopInfromationContent from 'components/molecules/ShopInfromation';
import Tab from 'components/atoms/Tab';

import BannerPrev from 'images/icon/atom-icon-left-green.inline.svg';
import BannerNext from 'images/icon/atom-icon-right-green.inline.svg';

import styles from './index.css';

const NextArrow = ({ onClick }) => (
	<button className={classnames(styles.controlButton, styles.next)} type="button" onClick={onClick}>
		<BannerNext />
	</button>
);

const PrevArrow = ({ onClick }) => (
	<button className={classnames(styles.controlButton, styles.prev)} type="button" onClick={onClick}>
		<BannerPrev />
	</button>
);

const ShopGroup = ({ tabSelected }) => {
	const media = useMedia();
	const [currentIdx, setCurrentIdx] = useState(0);
	const [newselected, setSelected] = useState(0);
	const [productselected, setproductSelected] = useState(0);

	const settings = {
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		infinite: false,
		customPaging: i => (
			<div
				style={{
					width: '12px',
					height: '12px',
					transform: i === currentIdx ? 'scale(1.333)' : 'initial',
					backgroundColor: i === currentIdx ? '#1faa39' : '#fff',
					borderRadius: '8px',
					border: 'solid 1px #1faa39',
					cursor: 'pointer',
				}}
			/>
		),
		appendDots: dots => (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					position: 'absolute',
					width: '100%',
					bottom: '-30px',
				}}
			>
				<div className={styles.lineWrapper}>
					<div className={styles.line} />
					<ul style={{ padding: 0, margin: 0, display: 'flex' }}>{dots}</ul>
				</div>
			</div>
		),
		beforeChange: (_, next) => {
			setSelected(next);
			setCurrentIdx(next);
		},
	};

	return (
		<div className={styles.shopGroupWrapper}>
			{tabSelected === 0 ? (
				<>
					<NewsArrivals tabNewSelected={newselected} />
				</>
			) : tabSelected === 1 ? (
				<>
					<div className={styles.shopTab}>
						<Tab
							className="product-tab"
							selected={productselected}
							setSelected={setproductSelected}
							tabs={['CLOTHES', 'JACKETS', 'ACCESORY', 'SHOES']}
						/>
						<ShopProductGroup tabSelected={productselected} />
					</div>
				</>
			) : (
				<>
					<ShopInfromationContent />
				</>
			)}
		</div>
	);
};

export default ShopGroup;
