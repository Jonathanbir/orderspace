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

	const shirt_products = products.products.filter(p => p.categories === 'shirt');
	const jacket_products = products.products.filter(p => p.categories === 'jacket');
	const accesory_products = products.products.filter(p => p.categories === 'accesory');
	const shoes_products = products.products.filter(p => p.categories === 'shoes');

	return (
		<div className={styles.productWrapper}>
			{tabSelected === 0 ? (
				<>
					<ShopProductContent
						title="CLOTHES"
						data={shirt_products}
						setProducts={setProducts}
						products={products}
					/>
				</>
			) : tabSelected === 1 ? (
				<>
					<ShopProductContent
						title="JACKETS"
						data={jacket_products}
						setProducts={setProducts}
						products={products}
					/>
				</>
			) : tabSelected === 2 ? (
				<>
					<ShopProductContent
						title="ACCESORY"
						data={accesory_products}
						setProducts={setProducts}
						products={products}
					/>
				</>
			) : (
				<>
					<ShopProductContent
						title="SHOES"
						data={shoes_products}
						setProducts={setProducts}
						products={products}
					/>
				</>
			)}
		</div>
	);
};

export default ShopProductGroup;
