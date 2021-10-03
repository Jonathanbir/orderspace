import React from 'react';
import { useMedia } from 'util/hook/useMedia';

import Link from 'components/atoms/Link';
import Button from 'components/atoms/Button';
import NewsContent from 'components/molecules/NewsContent';

import styles from './index.css';

const NewsSection = () => {
	const media = useMedia();
	const newsData = [
		{
			title: 'New Show Is Coming Now!',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/news01.jpg',
			text:
				'new stuff is coming.just prepare the money and buy .just prepare the money and buy.new stuff is coming.just prepare the money',
			classname: 'news1',
		},
		{
			title: 'Hot Stuff all you can pick!',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/news02.jpg',
			text:
				'new stuff is coming.just prepare the money and buy .just prepare the money and buy.new stuff is coming.just prepare the money',
			classname: 'news2',
		},
		{
			title: 'MAFO prepare holding EDM in Park!',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/instagram23.jpg',
			text:
				'new stuff is coming.just prepare the money and buy .just prepare the money and buy.new stuff is coming.just prepare the money',
			classname: 'news3',
		},
		{
			title: 'Suprem show a jewery box in house.',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/news03.jpg',
			text:
				'new stuff is coming.just prepare the money and buy .just prepare the money and buy.new stuff is coming.just prepare the money',
			classname: 'news4',
		},
	];

	return (
		<div className={styles.newsSection}>
			<div className={styles.newsTitle}>
				<h2>NEWS</h2>
			</div>
			<div className={styles.newsContainer}>
				<NewsContent data={newsData[0]} />
				<NewsContent data={newsData[1]} />
				<NewsContent data={newsData[2]} />
				<NewsContent data={newsData[3]} />
			</div>
		</div>
	);
};

export default NewsSection;
