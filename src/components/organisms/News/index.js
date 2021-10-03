/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';

import { useMedia } from 'util/hook/useMedia';

import { scrollToOffset } from 'util/helper';

import NewsContent from 'components/organisms/NewsContent';

import styles from './index.css';

const News = () => {
	const media = useMedia();

	useEffect(() => {
		scrollToOffset(0);
	}, []);

	const newsData = [
		{
			title: 'Jordan astronaut',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/p01.png',
			planet: 'https://jonathanbir.files.wordpress.com/2021/09/moon.png',
			ball: 'https://jonathanbir.files.wordpress.com/2021/09/jordan.jpg',
			text:
				'Jordan of Foreign Affairs and Expatriates on said it began working on the immediate release of Jordanian citizen Yaqoub ...',
		},
		{
			title: 'Floating Crowan',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/p02.png',
			planet: 'https://jonathanbir.files.wordpress.com/2021/09/planets02.png',
			ball: 'https://jonathanbir.files.wordpress.com/2021/09/clown.jpg',
			text:
				'Flaoting Crown of Foreign Affairs and Expatriates on Monday said it began working on the immediate release of Jordanian citizen Yaqoub ...',
		},
		{
			title: 'OuterSpace Nike1',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/p03.png',
			planet: 'https://jonathanbir.files.wordpress.com/2021/09/planets03.png',
			ball: 'https://jonathanbir.files.wordpress.com/2021/09/nike-shoes01.jpg',
			text:
				'Outer NIKEx3 and Expatriates on Monday said it began working on the immediate release of Jordanian citizen Yaqoub ...',
		},
		{
			title: 'OuterSpace Nike7',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/p04.png',
			planet: 'https://jonathanbir.files.wordpress.com/2021/09/planets04.png',
			ball: 'https://jonathanbir.files.wordpress.com/2021/09/nike-shoes07.jpg',
			text:
				'Outer NIKEx7 and Expatriates on Monday said it began working on the immediate release of Jordanian citizen Yaqoub ...',
		},
		{
			title: 'Show Time',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/p05.png',
			planet: 'https://jonathanbir.files.wordpress.com/2021/09/planets05.png',
			ball: 'https://jonathanbir.files.wordpress.com/2021/09/model01.jpg',
			text:
				'Our show is start! Expatriates on Monday said it began working on the immediate release of Jordanian citizen Yaqoub ...',
		},
		{
			title: 'Stephen Curry 11',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/p06.png',
			planet: 'https://jonathanbir.files.wordpress.com/2021/09/planets06.png',
			ball: 'https://jonathanbir.files.wordpress.com/2021/09/curry.jpg',
			text:
				'Stephen Curry creat Curry10 this summer. Expatriates on Monday said it began working on the immediate release of Jordanian citizen Yaqoub ...',
		},
		{
			title: 'Astronaut coming',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/p07.png',
			planet: 'https://jonathanbir.files.wordpress.com/2021/09/planets08.png',
			ball: 'https://jonathanbir.files.wordpress.com/2021/09/astronaut.jpg',
			text:
				'Astonaut on Monday said it began working on the immediate release of Jordanian citizen Yaqoub ...',
		},
		{
			title: 'Back2 Future',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/p08.png',
			planet: 'https://jonathanbir.files.wordpress.com/2021/09/planets07.png',
			ball: 'https://jonathanbir.files.wordpress.com/2021/09/nike-shoes04.jpg',
			text:
				'Walk back to Future is coming again!said it began working on the immediate release of Jordanian citizen Yaqoub ...',
		},
	];

	return (
		<div className={styles.newsWrapper}>
			<div className={styles.newsContainer}>
				<div className={styles.banner}>
					<h1>NEWS</h1>
				</div>
			</div>
			<NewsContent news={newsData} />
			<div className={styles.upBtn} type="outlined" onClick={() => scrollToOffset(0)} />
		</div>
	);
};

export default News;
