import React, { useState, useMemo } from 'react';
import Slider from 'react-slick';
import classnames from 'classnames';
import dayjs from 'dayjs';

import { useMedia } from 'util/hook/useMedia';

import PageTitle from 'components/atoms/PageTitle';
import SliderPrev from 'images/icon/about-milestons-left.inline.svg';
import SliderNext from 'images/icon/about-milestons-right.inline.svg';

import 'slick-carousel/slick/slick.css';
import styles from './index.css';

const NextArrow = ({ onClick }) => (
	<button className={classnames(styles.controlButton, styles.next)} type="button" onClick={onClick}>
		<SliderNext />
	</button>
);

const PrevArrow = ({ onClick }) => (
	<button className={classnames(styles.controlButton, styles.prev)} type="button" onClick={onClick}>
		<SliderPrev />
	</button>
);

const AboutMilestone = ({ data }) => {
	const media = useMedia();
	const [yearSelected, setYearSelected] = useState(0);
	const [yearItemSelected, setYearItemSelected] = useState(0);
	const timelineSlider = {
		className: styles.timeLine,
		focusOnSelect: true,
		centerMode: true,
		infinite: false,
		// eslint-disable-next-line no-nested-ternary
		slidesToShow: media === 'desktop' ? 9 : media === 'tablet' ? 5 : 3,
		slidesToScroll: 1,
		arrows: false,
		beforeChange: (_, next) => setYearSelected(next),
		centerPadding: media === 'phone' ? '32px' : 0,
		touchThreshold: 152,
		variableWidth: true,
	};
	const milestonsSlider = {
		className: styles.milestons,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		centerMode: media === 'desktop',
		centerPadding: media === 'desktop' ? '128px' : '0px',
		dots: true,
		dotsClass: styles.sliderDots,
		beforeChange: (_, next) => setYearItemSelected(next),
		customPaging: i => (
			<div
				style={{
					width: '12px',
					height: '12px',
					transform: i === yearItemSelected ? 'scale(1.333)' : 'initial',
					backgroundColor: i === yearItemSelected ? '#1faa39' : '#fff',
					borderRadius: '50%',
					border: 'solid 1px #1faa39',
					cursor: 'pointer',
				}}
			/>
		),
		appendDots: dots => (
			<div>
				<div>
					<ul style={{ padding: 0, margin: 0, display: 'flex' }}>{dots}</ul>
				</div>
			</div>
		),
	};
	const years = useMemo(() => {
		const returnValues = [];
		for (let i = 1999; i <= dayjs().year(); i += 1) {
			returnValues.push(i);
		}

		if (media === 'tablet') {
			return returnValues.concat([0, 0, 0, 0]);
		}
		if (media === 'phone') {
			return returnValues.concat([0]);
		}

		return returnValues.concat([0, 0, 0, 0, 0, 0, 0, 0]);
	}, [media]);

	return (
		<div className={styles.aboutMilestone}>
			<PageTitle titleEn="MILESTONE" titleTw="大事紀" />
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<Slider {...timelineSlider}>
				{years.map((year, yearIdx) => (
					/* eslint-disable-next-line */
					<div key={year + yearIdx}>
						<div
							className={classnames(
								styles.yearDot,
								yearIdx === yearSelected && styles.selectedYear,
								year === 0 && styles.hide,
							)}
						>
							<p>{year}</p>
						</div>
					</div>
				))}
			</Slider>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<Slider {...milestonsSlider}>
				{/* eslint-disable-next-line no-shadow */}
				{data.map(data => (
					<div key={data.name}>
						<div className={styles.contentImg}>
							<div className={styles.img} />
							<div>{data.name}</div>
						</div>
					</div>
				))}
				{/* eslint-disable-next-line no-shadow */}
				{data.map(data => (
					<div key={data.name}>
						<div className={styles.contentText}>
							<div>{data.name}</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default AboutMilestone;
