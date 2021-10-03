import React, { useState } from 'react';
import Slider from 'react-slick';
import classnames from 'classnames';

import { useMedia } from 'util/hook/useMedia';

import ShopCard from 'components/atoms/ShopCard';

import BannerPrev from 'images/icon/atom-icon-left-green.inline.svg';
import BannerNext from 'images/icon/atom-icon-right-green.inline.svg';

import 'slick-carousel/slick/slick.css';
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

const ShopCardsGroup = () => {
	const media = useMedia();
	const [currentIdx, setCurrentIdx] = useState(0);
	const [selected, setSelected] = useState(0);
	const shopData = [
		{
			title: 'CAP',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/cap.jpg',
			id: 'shopImg1',
		},
		{
			title: 'BAG',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/bag.jpg',
			id: 'shopImg2',
		},
		{
			title: 'JACKET',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/jacket.jpg',
			id: 'shopImg3',
		},
		{
			title: 'SHIRT',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/shirt.jpg',
			id: 'shopImg4',
		},
		{
			title: 'PANTS',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/pants.jpg',
			id: 'shopImg5',
		},
		{
			title: 'SHOES',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/shoes.jpg',
			id: 'shopImg6',
		},
		{
			title: 'ACCESORY',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/accesory-1.jpg',
			id: 'shopImg7',
		},
	];

	const settings = {
		dots: false,
		// eslint-disable-next-line no-nested-ternary
		slidesToShow: media === 'desktop' ? 7 : media === 'tablet' ? 2 : 1,
		slidesToScroll: media === 'desktop' ? 7 : 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		customPaging: i => {
			return (
				<div
					style={{
						width: '12px',
						height: '12px',
						backgroundColor: i * 3 === currentIdx ? '#1faa39' : '#fff',
						borderRadius: '8px',
						border: 'solid 1px #1faa39',
						cursor: 'pointer',
					}}
				/>
			);
		},
		appendDots: dots => (
			<div
				style={{
					display: media === 'desktop' ? 'flex' : 'none',
					justifyContent: 'center',
					position: 'absolute',
					bottom: '-50px',
					left: '0px',
					right: '0px',
				}}
			>
				<div className={styles.lineWrapper}>
					<div className={styles.line} />
					<ul style={{ padding: 0, margin: 0, display: 'flex' }}>{dots}</ul>
				</div>
			</div>
		),
		beforeChange: (_, next) => {
			setCurrentIdx(next);
			setSelected(next);
		},
	};

	return (
		<div className={styles.cardsGroup}>
			<h1>SHOP</h1>
			<div className={styles.shopContainer}>
				{/* eslint-disable react/jsx-props-no-spreading */}
				<Slider className={styles.slider} {...settings}>
					{shopData.length > 0 &&
						shopData.map((_data, idx) => (
							<ShopCard idx={idx} key={_data.id} blur={idx !== selected} data={_data} />
						))}
				</Slider>
			</div>
		</div>
	);
};

export default ShopCardsGroup;
