/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';

import BannerHome from 'components/molecules/BannerHome';
import NewsArrivalsSection from 'components/molecules/NewsArrivalsSection';
import ShopSection from 'components/molecules/ShopSection';
import NewsSection from 'components/molecules/NewsSection';
import ShowSection from 'components/molecules/ShowSection';
import InstagramSection from 'components/molecules/InstagramSection';

import { useMedia } from 'util/hook/useMedia';

import { scrollToOffset } from 'util/helper';

import styles from './index.css';

const Home = () => {
	const media = useMedia();

	useEffect(() => {
		scrollToOffset(0);
	}, []);

	return (
		<div className={styles.indexWrapper}>
			<div className={styles.bannerHome}>
				<BannerHome />
			</div>
			<div className={styles.others}>
				<NewsArrivalsSection />
				<ShopSection />
				<NewsSection />
				<ShowSection />
				<InstagramSection />
			</div>
			<div className={styles.upBtn} type="outlined" onClick={() => scrollToOffset(0)} />
		</div>
	);
};

export default Home;
