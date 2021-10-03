/* eslint-disable indent */
import React, { useState } from 'react';
import classnames from 'classnames';
import Slider from 'react-slick';

import { useHome } from 'models/home';

import { useMedia } from 'util/hook/useMedia';

import Link from 'components/atoms/Link';
import Button from 'components/atoms/Button';

import BannerPrev from 'images/icon/atom-icon-left.inline.svg';
import BannerNext from 'images/icon/atom-icon-right.inline.svg';

import 'slick-carousel/slick/slick.css';

import styles from './index.css';

const { IMAGE_ENDPOINT } = process.env;

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

const BannerHome = () => {
	const media = useMedia();
	const [currentIdx, setCurrentIdx] = useState(0);
	const bannerList = [
		{
			image: 'https://jonathanbir.files.wordpress.com/2021/09/bgc01.jpeg',
			status: 'ONLINE',
		},
		{
			image: 'https://jonathanbir.files.wordpress.com/2021/09/bgc06.jpeg',
			status: 'ONLINE',
		},
		{
			image: 'https://jonathanbir.files.wordpress.com/2021/09/03.jpg',
			status: 'ONLINE',
		},
		{
			image: 'https://jonathanbir.files.wordpress.com/2021/09/bgc02.jpg',
			status: 'ONLINE',
		},
	];

	const settings = {
		autoplay: true,
		autoplaySpeed: 3000,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		customPaging: i => (
			<div
				style={{
					width: '12px',
					height: '12px',
					transform: i === currentIdx ? 'scale(1.333)' : 'initial',
					backgroundColor: i === currentIdx ? '#000' : '#fff',
					borderRadius: '50%',
					border: 'solid 1px #000',
					cursor: 'pointer',
				}}
			/>
		),
		appendDots: dots => (
			<div
			// style={{
			// 	display: 'flex',
			// 	flexDirection: 'column',
			// 	justifyContent: 'space-between',
			// 	padding: media === 'desktop' ? '24px 48px 24px 32px' : '20px 20px 26px',
			// 	position: 'absolute',
			// 	bottom: '5px',
			// 	left: '0px',
			// 	width: media === 'desktop' ? '544px' : '320px',
			// 	backgroundColor: 'rgba(31, 170, 57, 0.56)',
			// 	borderTopRightRadius: '56px',
			// 	height: 200,
			// }}
			>
				{/* <h2 className={styles.h2Title}>{bannerList[currentIdx].title}</h2> */}
				<div className={styles.actionWrapper}>
					<div className={styles.lineWrapper}>
						{/* <div className={styles.line} /> */}
						<ul style={{ padding: 0, margin: 0, display: 'flex' }}>{dots}</ul>
					</div>
				</div>
			</div>
		),
		beforeChange: (_, next) => setCurrentIdx(next),
	};

	return (
		<div className={styles.banner}>
			<div className={styles.asset} />
			{/* eslint-disable react/jsx-props-no-spreading */}
			<Slider {...settings}>
				{bannerList.length > 0 &&
					bannerList.map(item =>
						item.link ? (
							<Link to={item.link} key={item.link} isExternal>
								<div>
									<div className={styles.img} />
								</div>
							</Link>
						) : (
							<div key={item.link}>
								<div
									className={styles.img}
									style={
										item.status === 'ONLINE'
											? {
													backgroundImage: `url(${media === 'desktop' ? item.image : item.image})`,
											  }
											: { display: 'none' }
									}
								/>
							</div>
						),
					)}
			</Slider>
		</div>
	);
};

export default BannerHome;
