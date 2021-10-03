/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';

import classnames from 'classnames';

import ShopProductContent from 'components/molecules/ShopProductContent';

import { useMedia } from 'util/hook/useMedia';

import styles from './index.css';

const ShopProductGroup = ({ tabSelected }) => {
	const media = useMedia();

	const shirtsData = [
		{
			title: 'CLOTHE1',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/clothes04.jpg',
			price: '$1980',
		},
		{
			title: 'CLOTHE2',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/clothes03.jpg',
			price: '$1980',
		},
		{
			title: 'CLOTHE3',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/clothes06.jpg',
			price: '$1980',
		},
		{
			title: 'CLOTHE4',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/clothes07.jpg',
			price: '$1980',
		},
		{
			title: 'CLOTHE5',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/clothes05.jpg',
			price: '$1980',
		},
		{
			title: 'CLOTHE6',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/clothes08.jpg',
			price: '$1980',
		},
		{
			title: 'CLOTHE7',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/clothes02.jpg',
			price: '$1980',
		},
		{
			title: 'CLOTHE8',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/clothes01.jpg',
			price: '$1980',
		},
		{
			title: 'CLOTHE9',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/new-arrival03.jpg',
			price: '$1980',
		},
	];

	const jacketsData = [
		{
			title: 'JACKET1',
			img:
				'https://jonathanbir.files.wordpress.com/2021/09/21ss-jkt-jjk5-d001_camo-1-1000x1000-1.jpeg',
			price: '$1980',
		},
		{
			title: 'JACKET2',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/new-arrival01.jpg',
			price: '$1980',
		},
		{
			title: 'JACKET3',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/new-arrival02.jpg',
			price: '$1980',
		},
		{
			title: 'JACKET4',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/jacket.jpg',
			price: '$1980',
		},
		{
			title: 'JACKET5',
			img:
				'https://jonathanbir.files.wordpress.com/2021/09/21ss-jkt-jjn1-d001_ing-1-1000x1000-1.jpeg',
			price: '$1980',
		},
		{
			title: 'JACKET6',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/21fw-jkt-tj-d001_dg-1-1000x1000-1.jpeg',
			price: '$1980',
		},
		{
			title: 'JACKET7',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/clothes15.jpg',
			price: '$1980',
		},
		{
			title: 'JACKET8',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/clothes14.jpg',
			price: '$1980',
		},
		{
			title: 'JACKET9',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/clothes17.jpg',
			price: '$1980',
		},
	];

	const accesoryData = [
		{
			title: 'ACCESORY',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/new-arrival07.jpg',
			price: '$1980',
		},
		{
			title: 'ACCESORY',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/accesory-1.jpg',
			price: '$1980',
		},
		{
			title: 'ACCESORY',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/cap.jpg',
			price: '$1980',
		},
		{
			title: 'ACCESORY',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/bag.jpg',
			price: '$1980',
		},
		{
			title: 'ACCESORY',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/new-arrival06.jpg',
			price: '$1980',
		},
		{
			title: 'ACCESORY',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/new-arrival08.jpg',
			price: '$1980',
		},
		{
			title: 'ACCESORY',
			img:
				'https://jonathanbir.files.wordpress.com/2021/09/20ss-blt-pnt02-d001_blk-1-1000x1000-1.jpeg',
			price: '$1980',
		},
		{
			title: 'ACCESORY',
			img:
				'https://jonathanbir.files.wordpress.com/2021/09/19fw-wtx-wmt02-d01_ag-1-1000x1000-1.jpeg',
			price: '$1980',
		},
		{
			title: 'ACCESORY',
			img:
				'https://jonathanbir.files.wordpress.com/2021/09/19fw-tentbg-pueb01-d1_od-1-1000x1000-1.jpeg',
			price: '$1980',
		},
	];

	const shoesData = [
		{
			title: 'SHOES1',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/waffle-one-e794b7-1sfqwj.jpeg',
			price: '$1980',
		},
		{
			title: 'SHOES2',
			img:
				'https://jonathanbir.files.wordpress.com/2021/09/air-zoom-type-premium-e794b7-wdkpjf.jpeg',
			price: '$1980',
		},
		{
			title: 'SHOES3',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/air-max-96-2-e794b7-6l7j5t.jpeg',
			price: '$1980',
		},
		{
			title: 'SHOES4',
			img:
				'https://jonathanbir.files.wordpress.com/2021/09/air-force-1-07-lv8-emb-e794b7-hmqzhr.jpeg',
			price: '$1980',
		},
		{
			title: 'SHOES5',
			img:
				'https://jonathanbir.files.wordpress.com/2021/09/air-jordan-1-e4b8ade7ad92e6acbe-bpargv.jpeg',
			price: '$1980',
		},
		{
			title: 'SHOES6',
			img:
				'https://jonathanbir.files.wordpress.com/2021/09/sb-zoom-blazer-e4b8ade7ad92-premium-e6bb91e69dbf-bdtq2k.jpeg',
			price: '$1980',
		},
		{
			title: 'SHOES7',
			img: 'https://jonathanbir.files.wordpress.com/2021/09/acg-air-deschutz-e6b6bc-f6s3mc.jpeg',
			price: '$1980',
		},
		{
			title: 'SHOES8',
			img:
				'https://jonathanbir.files.wordpress.com/2021/09/jordan-ls-10-paris-saint-germain-e794b7e6acbee68b96-rmcgdj.jpeg',
			price: '$1980',
		},
		{
			title: 'SHOES9',
			img:
				'https://jonathanbir.files.wordpress.com/2021/09/acg-air-deschucc88tz-e6b6bc-tv3n6w.jpeg',
			price: '$1980',
		},
	];

	return (
		<div className={styles.productWrapper}>
			{tabSelected === 0 ? (
				<>
					<ShopProductContent title="CLOTHES" data={shirtsData} />
				</>
			) : tabSelected === 1 ? (
				<>
					<ShopProductContent title="JACKETS" data={jacketsData} />
				</>
			) : tabSelected === 2 ? (
				<>
					<ShopProductContent title="ACCESORY" data={accesoryData} />
				</>
			) : (
				<>
					<ShopProductContent title="SHOES" data={shoesData} />
				</>
			)}
		</div>
	);
};

export default ShopProductGroup;
