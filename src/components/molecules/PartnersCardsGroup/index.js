/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable no-mixed-operators */
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import classnames from 'classnames';

import { useMedia } from 'util/hook/useMedia';

import PartnersCard from 'components/atoms/PartnersCard';
import Link from 'components/atoms/Link';

import ActionLinkIcon from 'images/icon/atom-icon-action-link.inline.svg';
import ActionPhoneIcon from 'images/icon/atom-icon-style-phone.inline.svg';
import ActionAddressIcon from 'images/icon/atom-icon-style-location.inline.svg';
import ClossIcon from 'images/icon/cross-remove-sign-svgrepo-com.inline.svg';
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

const PartnersCardsGroup = ({ type, tabSelected = 0, data }) => {
	const media = useMedia();
	const sliderRef = useRef(null);
	const [currentIdx, setCurrentIdx] = useState(0);
	const [hovered, setHovered] = useState(null);
	const [hover, setHover] = useState(null);
	const [closed, setClosed] = useState(null);
	const [selected, setSelected] = useState(0);

	const settings = {
		dots: true,
		slidesToShow: type === 'partner' ? (media === 'desktop' ? 3 : 2) : media === 'desktop' ? 4 : 2,
		slidesToScroll:
			type === 'partner' ? (media === 'desktop' ? 3 : 2) : media === 'desktop' ? 4 : 2,
		slidesPerRow: type === 'partner' ? (media === 'desktop' ? 3 : 4) : media === 'desktop' ? 2 : 4,
		nextArrow: type === 'home' ? <NextArrow /> : <div />,
		prevArrow: type === 'home' ? <PrevArrow /> : <div />,
		customPaging: i => (
			<div
				style={{
					width: '12px',
					height: '12px',
					backgroundColor: (type === 'partner' ? i * 3 : i * 4) === currentIdx ? '#1faa39' : '#fff',
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
					width: '100%',
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
			setSelected(next);
			setCurrentIdx(next);
		},
	};

	useEffect(() => {
		if (sliderRef.current) {
			sliderRef.current.slickGoTo(0);
		}
	}, [tabSelected]);

	return (
		<div className={styles.wrapper}>
			{closed !== null && (
				<div className={classnames(styles.black, closed !== null && styles.closed)} />
			)}
			{/* eslint-disable react/jsx-props-no-spreading */}
			<Slider {...settings} ref={sliderRef}>
				{data.length > 0 &&
					data.map((n, idx) => (
						<PartnersCard
							data={n}
							blur={idx !== selected}
							idx={idx}
							key={n.name}
							isEmpty={n.isEmpty}
							setHovered={media === 'desktop' && setHovered}
							setHover={media === 'desktop' && setHover}
							setClosed={setClosed}
							type={type}
						/>
					))}
			</Slider>
			<div
				className={classnames(
					styles.information,
					hovered !== null && styles.animation,
					closed !== null && styles.closed,
				)}
				style={
					media === 'desktop'
						? type === 'partner'
							? {
									left: Math.floor((hover % 9) / 3) * 291 + 20,
									top: ((hover % 9) % 3) * 118,
									transform: 'translate(-40px, -20px)',
							  }
							: {
									left: Math.floor((hover % 8) / 2) * 291 + 10,
									top: ((hover % 8) % 2) * 126,
									transform: 'translate(-40px, -40px)',
							  }
						: { display: 'none' }
				}
				onMouseLeave={() => setHovered(null)}
			>
				<div className={styles.link}>
					<h4>
						{media === 'desktop'
							? hover !== null && data.length > 0 && data[hover].name
							: closed !== null && data.length > 0 && data[closed].name}
					</h4>
					<Link to={hover !== null && data.length > 0 && data[hover].url} isExternal>
						<ActionLinkIcon />
					</Link>
				</div>
				<a
					className={styles.link}
					href={`tel:${hover !== null && data.length > 0 && data[hover].phone}`}
				>
					<ActionPhoneIcon style={{ alignSelf: 'flex-start', marginTop: 4 }} />
					<p>
						{media === 'desktop'
							? hover !== null && data.length > 0 && data[hover].phone
							: closed !== null && data.length > 0 && data[closed].phone}
					</p>
				</a>
				<Link
					className={styles.link}
					to={
						hover !== null && data.length > 0
							? `http://maps.google.com/maps?daddr=${data[hover].address}`
							: ''
					}
					isExternal
				>
					<ActionAddressIcon style={{ alignSelf: 'flex-start', marginTop: 4 }} />
					<p>
						{media === 'desktop'
							? hover !== null && data.length > 0 && data[hover].address
							: closed !== null && data.length > 0 && data[closed].address}
					</p>
				</Link>
				{media !== 'desktop' && (
					<ClossIcon className={styles.close} onClick={() => setClosed(null)} />
				)}
			</div>
		</div>
	);
};

export default PartnersCardsGroup;
