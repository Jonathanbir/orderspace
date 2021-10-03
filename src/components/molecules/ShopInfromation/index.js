/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-danger */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import Slider from 'react-slick';
import classnames from 'classnames';

import CarouselTab from 'components/atoms/CarouselTab';
import RecommendCard from 'components/atoms/RecommendCard';
import ImageGallery from 'components/molecules/ImageGallery';

import BannerPrev from 'images/icon/atom-icon-left-green.inline.svg';
import BannerNext from 'images/icon/atom-icon-right-green.inline.svg';

import { useMedia } from 'util/hook/useMedia';

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

const ShopInfromationContent = props => {
	const media = useMedia();
	const [currentIdx, setCurrentIdx] = useState(0);
	const [tabselected, setTabSelected] = useState(0);
	const [selected, setSelected] = useState(0);
	const images = [
		'https://jonathanbir.files.wordpress.com/2021/09/goods01.jpg',
		'https://jonathanbir.files.wordpress.com/2021/09/goods05.jpg',
		'https://jonathanbir.files.wordpress.com/2021/09/goods06.jpg',
		'https://jonathanbir.files.wordpress.com/2021/09/goods04.jpg',
	];

	const jacketsData = [
		{
			title: 'JACKET1',
			img:
				'https://jonathanbir.files.wordpress.com/2021/09/21ss-jkt-jjk5-d001_camo-1-1000x1000-1.jpeg',
			price: '$1980',
		},
		{
			title: 'JACKET2',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/new-arrival01.jpg',
			price: '$1980',
		},
		{
			title: 'JACKET3',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/new-arrival02.jpg',
			price: '$1980',
		},
		{
			title: 'JACKET4',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/jacket.jpg',
			price: '$1980',
		},
		{
			title: 'JACKET5',
			img:
				'https://jonathanbir.files.wordpress.com/2021/09/21ss-jkt-jjn1-d001_ing-1-1000x1000-1.jpeg',
			price: '$1980',
		},
		{
			title: 'JACKET6',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/21fw-jkt-tj-d001_dg-1-1000x1000-1.jpeg',
			price: '$1980',
		},
		{
			title: 'JACKET7',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/clothes15.jpg',
			price: '$1980',
		},
		{
			title: 'JACKET8',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/clothes14.jpg',
			price: '$1980',
		},
		{
			title: 'JACKET9',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/clothes17.jpg',
			price: '$1980',
		},
	];

	const settings = {
		dots: false,
		// eslint-disable-next-line no-nested-ternary
		slidesToShow: media === 'desktop' ? 3 : media === 'tablet' ? 2 : 1,
		slidesToScroll: media === 'desktop' ? 1 : 1,
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
		<div className={styles.shopInfromationContent}>
			<div className={styles.informationContent}>
				<div className={styles.imageContent}>
					<ImageGallery tabSelected={tabselected} images={images} />
					<CarouselTab selected={tabselected} setSelected={setTabSelected} tabs={images} />
				</div>
				<div className={styles.textContent}>
					<h2>JACKETS</h2>
					<p>
						Hot in this summer,recommending by CLOT and MDNS sponsor , don't miss this chance ,only
						sell for 3 mounts ,if you wanna get one just click the buy!
					</p>
					<p className={styles.informationPrice}>NT$1840</p>

					<div className={styles.selectBox}>
						<span>size</span>
						<select name="size">
							<option value="s">S</option>
							<option value="m">M</option>
							<option value="l">L</option>
							<option value="xl">XL</option>
						</select>
					</div>
					<div className={styles.selectBox}>
						<span>amount</span>
						<select name="amount">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>

					<a className={styles.btn} href="#">
						Add
					</a>
					<a className={styles.btn} href="#">
						BUY
					</a>
				</div>
			</div>
			<div className={styles.recommendContent}>
				<h3>RECOMMND</h3>
				<div className={styles.recommend}>
					{/* eslint-disable react/jsx-props-no-spreading */}
					<Slider className={styles.cardsMobile} {...settings}>
						{/* eslint-disable-next-line no-shadow */}
						{jacketsData.length > 0 &&
							jacketsData.map((_data, idx) => (
								<RecommendCard idx={idx} key={_data.id} blur={idx !== selected} data={_data} />
							))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default ShopInfromationContent;
