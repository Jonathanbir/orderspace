/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useMemo, useEffect, useRef } from 'react';
import classnames from 'classnames';
import Slider from 'react-slick';

import { useService } from 'models/service';
import { useRouting } from 'models/routing';

import ServiceIntroCard from 'components/atoms/ServiceIntroCard';

import { useMedia } from 'util/hook/useMedia';

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

const ServiceSlider = ({ type, selected, setSelected }) => {
	const media = useMedia();
	const sliderRef = useRef(null);
	const [{ serviceIntroList }] = useService();
	const [{ search, state }, { replaceRoute }] = useRouting();
	const settings = {
		focusOnSelect: true,
		centerMode: true,
		infinite: false,
		slidesToShow: media === 'desktop' ? 3 : 1,
		slidesToScroll: 1,
		arrows: media !== 'desktop',
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (_, next) => setSelected(next),
		centerPadding: 0,
		variableWidth: true,
	};
	const filteredList = useMemo(() => {
		const emptyCard = {
			description: '',
			icon: '',
			name: '',
			products: [],
			status: '',
			svy_url: '',
			type: '',
			weight: null,
			isEmpty: true,
		};
		if (media === 'desktop') {
			return serviceIntroList
				.filter(s => s.type === (type ? 'PROPERTY' : 'LIFE'))
				.concat([emptyCard, emptyCard]);
		}
		return serviceIntroList.filter(s => s.type === (type ? 'PROPERTY' : 'LIFE'));
	}, [type, media]);

	useEffect(() => {
		if (sliderRef.current && state) {
			const index = filteredList.findIndex(f => f.name === state.name);
			sliderRef.current.slickGoTo(index > -1 ? index : 0, true);
			replaceRoute({ search, state: {} });
		} else {
			sliderRef.current.slickGoTo(0, true);
		}
	}, [type]);

	return (
		<div className={styles.serviceSlider}>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<Slider className={styles.slider} ref={sliderRef} {...settings}>
				{filteredList.length > 0 &&
					filteredList.map((_card, idx) => (
						<ServiceIntroCard
							data={_card}
							key={_card.name}
							centerSelected={idx === selected}
							centerLeftSelected={idx + 1 === selected}
							centerRightSelected={idx - 1 === selected}
						/>
					))}
			</Slider>
		</div>
	);
};

export default ServiceSlider;
