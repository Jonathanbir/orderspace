import React, { useState } from 'react';
import Slider from 'react-slick';
import classnames from 'classnames';

import { useMedia } from 'util/hook/useMedia';

import NewsTableCard from 'components/atoms/NewsTableCard';

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

const NewsArrivalsSection = () => {
	const media = useMedia();
	const [currentIdx, setCurrentIdx] = useState(0);
	const [selected, setSelected] = useState(0);
	const newsList = [
		{
			cover: 'https://i.pinimg.com/originals/95/35/99/9535997182088586a435a276df908ea6.jpg',
			id: 15,
			publishTime: '2021-05-03 16:00:00',
			status: 'ONLINE',
			img1: 'https://jonathanbir.files.wordpress.com/2021/09/new-arrivals-front-03.png',
			img2: 'https://jonathanbir.files.wordpress.com/2021/09/tumblr_p2rtnlqiy41wsmwyqo1_6401.png',
		},
		{
			cover: 'https://i.pinimg.com/originals/93/d0/e4/93d0e483a039b00849cfdf5795daf786.jpg',
			id: 15,
			publishTime: '2021-05-03 16:00:00',
			status: 'ONLINE',
			title: '太空一',
			weight: 12,
			img1: 'https://jonathanbir.files.wordpress.com/2021/09/new-back-02.png',
			img2: 'https://jonathanbir.files.wordpress.com/2021/09/new-front-02.png',
		},
		{
			cover: 'https://i.pinimg.com/originals/80/11/c9/8011c98d642c0c7735cf21627104ee7d.jpg',
			id: 15,
			publishTime: '2021-05-03 16:00:00',
			status: 'ONLINE',
			title: '太空一',
			weight: 12,
			img1: 'https://jonathanbir.files.wordpress.com/2021/09/new-arrivals-front-03.png',
			img2: 'https://jonathanbir.files.wordpress.com/2021/09/tumblr_p2rtnlqiy41wsmwyqo1_6401.png',
		},
		{
			cover:
				'https://pyxis.nymag.com/v1/imgs/a91/7fa/c5508f2e3ce4fcc173aaf71c56aa70b9c4-10-vollebak-hoodie.rsquare.w700.jpg',
			id: 15,
			publishTime: '2021-05-03 16:00:00',
			status: 'ONLINE',
			title: '太空一',
			weight: 12,
			img1: 'https://jonathanbir.files.wordpress.com/2021/09/new-back-02.png',
			img2: 'https://jonathanbir.files.wordpress.com/2021/09/new-front-02.png',
		},
		{
			cover:
				'https://hiking.ru/wp-content/uploads/2018/01/04-Vollebak-Baker-Miller-Relaxation-Hoodie.jpg',
			id: 15,
			publishTime: '2021-05-03 16:00:00',
			status: 'ONLINE',
			title: '太空一',
			weight: 12,
			img1: 'https://jonathanbir.files.wordpress.com/2021/09/new-arrivals-front-03.png',
			img2: 'https://jonathanbir.files.wordpress.com/2021/09/tumblr_p2rtnlqiy41wsmwyqo1_6401.png',
		},
		{
			cover:
				'https://easttouch.my-magazine.me/main/upload/photoalbum/original/53636dcce589c/d3fa84b9d370887b1c3034fad4e31fa3ecd44595.jpg',
			id: 15,
			publishTime: '2021-05-03 16:00:00',
			status: 'ONLINE',
			title: '太空一',
			weight: 12,
			img1: 'https://jonathanbir.files.wordpress.com/2021/09/new-back-02.png',
			img2: 'https://jonathanbir.files.wordpress.com/2021/09/new-front-02.png',
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
		<div className={styles.newsarrivalsWrapper}>
			<div className={styles.container}>
				<h1>NEW ARRIVALS</h1>
				{/* eslint-disable react/jsx-props-no-spreading */}
				<Slider className={styles.slider} {...settings}>
					{newsList.length > 0 &&
						newsList.map((n, idx) => <NewsTableCard data={n} key={n.id} blur={idx !== selected} />)}
				</Slider>
			</div>
		</div>
	);
};

export default NewsArrivalsSection;
