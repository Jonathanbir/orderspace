import React from 'react';
import Slider from 'react-slick';
import classnames from 'classnames';

import PageTitle from 'components/atoms/PageTitle';
import AboutTopten from 'components/molecules/AboutTopten';

import Icon01 from 'images/icon/atom-image-honesty.inline.svg';
import Icon02 from 'images/icon/atom-image-profetional.inline.svg';
import Icon03 from 'images/icon/atom-image-positive.inline.svg';
import Icon04 from 'images/icon/atom-image-innovation.inline.svg';
import BannerPrev from 'images/icon/atom-btn-stepper-left.inline.svg';
import BannerNext from 'images/icon/atom-btn-stepper-right.inline.svg';
import Logo from 'images/icon/logo.inline.svg';

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

const AboutCompanyProfile = () => {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};
	const profile = [
		{
			title: '誠信',
			img: <Icon01 />,
			content:
				'基於保險契約為最大誠信契約，公司以最大誠信自許，期許成為保險業與消費者之間最公平互信的橋樑。',
		},
		{
			title: '專業',
			img: <Icon02 />,
			content:
				'秉持最嚴謹的教育訓練，完善規劃新進人員基礎課程，以及培育進階實戰銷售，全方位提升同仁保險專業素養。',
		},
		{
			title: '積極',
			img: <Icon03 />,
			content: '不僅培養同仁的專業素質，亦著重良好、積極的工作態度。',
		},
		{
			title: '創新',
			img: <Icon04 />,
			content: '不斷檢視、優化現有的作業流程，藉由導入系統化、數位化等方式，協助同仁事半功倍。',
		},
	];
	return (
		<div className={styles.companyProfile}>
			<PageTitle titleEn="ABOUT" titleTw="公司簡介" />
			<div className={styles.cardGroup}>
				<div className={styles.cardGroupBackground}>
					<Logo className={styles.logo} />
					<h3>
						「誠信、專業、積極、創新」
						<br />
						是我們的核心經營理念。
					</h3>
				</div>
				<div className={styles.cards}>
					{/* eslint-disable-next-line no-shadow */}
					{profile.map(profile => (
						<div className={styles.card} key={profile.title}>
							<h3>{profile.title}</h3>
							{profile.img}
							<div>{profile.content}</div>
						</div>
					))}
				</div>
				{/* eslint-disable react/jsx-props-no-spreading */}
				<Slider className={styles.cardsMobile} {...settings}>
					{/* eslint-disable-next-line no-shadow */}
					{profile.map(profile => (
						<div className={styles.card} key={profile.title}>
							<h3>{profile.title}</h3>
							{profile.img}
							<div>{profile.content}</div>
						</div>
					))}
				</Slider>
			</div>
			<div className={styles.message}>
				<div className={styles.messageContainer}>
					<div className={styles.content}>
						<h2>
							<span>「你也能成為別人心中的巨人」</span>
						</h2>
						<div>
							大誠以超人做為公司形象代表人物，其含義為「超群、超值、超越」
							<br />
							<br />
							我們希望大誠保經能為消費者提高更專業、更有價值的服務，每一夥伴都能成為他人心目中的英雄，共同完成「信守約定、始終如一」的承諾！
						</div>
					</div>
					<div className={styles.name}>
						<h2>
							<span>董事長</span>王文全
						</h2>
					</div>
				</div>
			</div>
			<AboutTopten />
		</div>
	);
};

export default AboutCompanyProfile;
