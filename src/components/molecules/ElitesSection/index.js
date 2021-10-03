import React, { useState } from 'react';
import Slider from 'react-slick';
import classnames from 'classnames';

import { useHome } from 'models/home';

import { useMedia } from 'util/hook/useMedia';

import Title from 'components/atoms/Title';
import ElitesTableCard from 'components/atoms/ElitesTableCard';
import Link from 'components/atoms/Link';
import Button from 'components/atoms/Button';

import BannerPrev from 'images/icon/atom-icon-left-green.inline.svg';
import BannerNext from 'images/icon/atom-icon-right-green.inline.svg';
import Circle from 'images/icon/circle-4.inline.svg';
import LineLeft from 'images/icon/line-left.inline.svg';
import LineRight from 'images/icon/line-right.inline.svg';

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

const ElitesSection = () => {
	const media = useMedia();
	const [currentIdx, setCurrentIdx] = useState(0);
	const [selected, setSelected] = useState(0);
	const [{ eliteList }] = useHome();

	const settings = {
		dots: true,
		slidesToShow: media === 'desktop' ? 3 : 1,
		slidesToScroll: media === 'desktop' ? 3 : 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		customPaging: i => (
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
		),
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
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Title
					className={styles.title}
					titleEn="HIB ELITES"
					titleTw="大誠菁英"
					circle={<Circle />}
				/>
				<div className={styles.topSection}>
					<div
						className={styles.img}
						style={{ backgroundImage: `url(${IMAGE_ENDPOINT}/${eliteList[0].cover})` }}
					/>
					<div className={styles.desc}>
						<LineLeft className={styles.lineLeft} />
						<LineRight className={styles.lineRight} />
						<h3>{eliteList[0].jobTitle}</h3>
						<h2>{eliteList[0].name}</h2>
						<p>{eliteList[0].storyTitle}</p>
						<Link to="/">
							<Button className={styles.moreButton} color="primary" onClick={() => {}}>
								閱讀更多
							</Button>
						</Link>
					</div>
				</div>
				{/* eslint-disable react/jsx-props-no-spreading */}
				<Slider {...settings}>
					{media === 'desktop' &&
						eliteList.length > 0 &&
						eliteList
							.filter((_, idx) => idx !== 0)
							.map(n => <ElitesTableCard key={n.name} data={n} />)}
					{media !== 'desktop' &&
						eliteList.length > 0 &&
						eliteList.map((n, idx) => (
							<ElitesTableCard key={n.name} data={n} idx={idx} blur={idx !== selected} />
						))}
				</Slider>
			</div>
		</div>
	);
};

export default ElitesSection;
