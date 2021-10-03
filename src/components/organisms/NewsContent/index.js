/* eslint-disable indent */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable no-mixed-operators */
import React, { useState } from 'react';
import Slider from 'react-slick';
import { useMedia } from 'util/hook/useMedia';
import classnames from 'classnames';

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

const NewsContent = data => {
	const media = useMedia();
	const [news, setNews] = useState();
	const [currentIdx, setCurrentIdx] = useState(0);
	const [selected, setSelected] = useState(0);

	const handleClick = id => {
		setNews(id);
	};

	const settings = {
		dots: false,
		// eslint-disable-next-line no-nested-ternary
		slidesToShow: 1,
		slidesToScroll: 1,
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
		<div className={styles.news}>
			{data.news.length > 0 &&
				media === 'desktop' &&
				data.news.map((_data, _id) => (
					<>
						<div
							className={styles.newsPlanet}
							style={{
								backgroundImage: `url(${_data.img})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
							}}
							onClick={() => handleClick(_id)}
						>
							<div className={styles.newsImg}>
								<h3>{_data.title}</h3>
							</div>
						</div>
					</>
				))}
			{data.news.length > 0 &&
				media === 'desktop' &&
				data.news.map((_data, _id) => (
					<>
						{_id === news && (
							<div
								className={
									_id === 6 ? classnames(styles.newsItem, styles.newsItem06) : styles.newsItem
								}
								style={
									_id === 2 || _id === 3
										? {
												backgroundImage: `url(${_data.planet})`,
												backgroundSize: '200%',
												backgroundPosition: '10px 20px',
												backgroundRepeat: 'no-repeat',
										  }
										: {
												backgroundImage: `url(${_data.planet})`,
												backgroundSize: 'cover',
												backgroundPosition: 'center',
												backgroundRepeat: 'no-repeat',
										  }
								}
							>
								<div className={styles.newsInformation}>
									<h3>{_data.title}</h3>
									<p>{_data.text}</p>
									<div className={styles.moreBtn}>MORE</div>
									<div
										className={styles.newsBall}
										style={{
											backgroundImage: `url(${_data.ball})`,
											backgroundSize: 'cover',
											backgroundPosition: 'center',
											backgroundRepeat: 'no-repeat',
										}}
									/>
								</div>
							</div>
						)}
					</>
				))}
			{/* eslint-disable react/jsx-props-no-spreading */}
			<Slider className={styles.slider} {...settings}>
				{data.news.length > 0 &&
					media !== 'desktop' &&
					data.news.map((_data, _id) => (
						<>
							<div
								className={
									_id === 6 ? classnames(styles.newsItem, styles.newsItem06) : styles.newsItem
								}
								style={
									_id === 2 || _id === 3
										? {
												backgroundImage: `url(${_data.planet})`,
												backgroundSize: '200%',
												backgroundPosition: '10px 20px',
												backgroundRepeat: 'no-repeat',
										  }
										: {
												backgroundImage: `url(${_data.planet})`,
												backgroundSize: '100%',
												backgroundPosition: 'center',
												backgroundRepeat: 'no-repeat',
										  }
								}
							>
								<div className={styles.newsContent}>
									<h3>{_data.title}</h3>
									<p>{_data.text}</p>
									<div className={styles.moreBtn}>MORE</div>
									<div
										className={styles.newsBall}
										style={{
											backgroundImage: `url(${_data.ball})`,
											backgroundSize: 'cover',
											backgroundPosition: 'center',
											backgroundRepeat: 'no-repeat',
										}}
									/>
								</div>
							</div>
						</>
					))}{' '}
			</Slider>
		</div>
	);
};

export default NewsContent;
