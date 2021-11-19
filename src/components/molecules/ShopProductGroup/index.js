/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import axios from 'commons/axios';
import decode from 'jwt-decode';

import ShopProductContent from 'components/molecules/ShopProductContent';

import { useMedia } from 'util/hook/useMedia';

import styles from './index.css';

const ShopProductGroup = ({ tabSelected }) => {
	const media = useMedia();
	const [products, setProducts] = useState({
		products: [],
		sourceProducts: [],
	});

	useEffect(() => {
		axios.get('/products').then(response => {
			setProducts({
				products: response.data,
				sourceProducts: response.data,
			});
		});
	}, []);

	const shirtsData = [
		{
			name: 'CLOTHE1',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/clothes04.jpg',
			price: '1980',
		},
		{
			name: 'CLOTHE2',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/clothes03.jpg',
			price: '1980',
		},
		{
			name: 'CLOTHE3',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/clothes06.jpg',
			price: '1980',
		},
		{
			name: 'CLOTHE4',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/clothes07.jpg',
			price: '1980',
		},
		{
			name: 'CLOTHE5',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/clothes05.jpg',
			price: '1980',
		},
		{
			name: 'CLOTHE6',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/clothes08.jpg',
			price: '1980',
		},
		{
			name: 'CLOTHE7',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/clothes02.jpg',
			price: '1980',
		},
		{
			name: 'CLOTHE8',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/clothes01.jpg',
			price: '1980',
		},
		{
			name: 'CLOTHE9',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/new-arrival03.jpg',
			price: '1980',
		},
	];

	const jacketsData = [
		{
			name: 'JACKET1',
			image:
				'https://jonathanbir.files.wordpress.com/2021/09/21ss-jkt-jjk5-d001_camo-1-1000x1000-1.jpeg',
			price: '1980',
		},
		{
			name: 'JACKET2',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/new-arrival01.jpg',
			price: '1980',
		},
		{
			name: 'JACKET3',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/new-arrival02.jpg',
			price: '1980',
		},
		{
			name: 'JACKET4',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/jacket.jpg',
			price: '1980',
		},
		{
			name: 'JACKET5',
			image:
				'https://jonathanbir.files.wordpress.com/2021/09/21ss-jkt-jjn1-d001_ing-1-1000x1000-1.jpeg',
			price: '1980',
		},
		{
			name: 'JACKET6',
			image:
				'https://jonathanbir.files.wordpress.com/2021/09/21fw-jkt-tj-d001_dg-1-1000x1000-1.jpeg',
			price: '1980',
		},
		{
			name: 'JACKET7',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/clothes15.jpg',
			price: '1980',
		},
		{
			name: 'JACKET8',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/clothes14.jpg',
			price: '1980',
		},
		{
			name: 'JACKET9',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/clothes17.jpg',
			price: '1980',
		},
	];

	const accesoryData = [
		{
			name: 'ACCESORY',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/new-arrival07.jpg',
			price: '1980',
		},
		{
			name: 'ACCESORY',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/accesory-1.jpg',
			price: '1980',
		},
		{
			name: 'ACCESORY',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/cap.jpg',
			price: '1980',
		},
		{
			name: 'ACCESORY',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/bag.jpg',
			price: '1980',
		},
		{
			name: 'ACCESORY',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/new-arrival06.jpg',
			price: '1980',
		},
		{
			name: 'ACCESORY',
			image: 'https://jonathanbir.files.wordpress.com/2021/09/new-arrival08.jpg',
			price: '1980',
		},
		{
			name: 'ACCESORY',
			image:
				'https://jonathanbir.files.wordpress.com/2021/09/20ss-blt-pnt02-d001_blk-1-1000x1000-1.jpeg',
			price: '1980',
		},
		{
			name: 'ACCESORY',
			image:
				'https://jonathanbir.files.wordpress.com/2021/09/19fw-wtx-wmt02-d01_ag-1-1000x1000-1.jpeg',
			price: '1980',
		},
		{
			name: 'ACCESORY',
			image:
				'https://jonathanbir.files.wordpress.com/2021/09/19fw-tentbg-pueb01-d1_od-1-1000x1000-1.jpeg',
			price: '1980',
		},
	];

	const shoesData = products.products;

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
