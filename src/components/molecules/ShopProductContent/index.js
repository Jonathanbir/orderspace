/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { useMedia } from 'util/hook/useMedia';

import ProductCard from 'components/atoms/ProductCard ';
import Pagination from 'components/molecules/Pagination';

import styles from './index.css';

const ShopProductContent = props => {
	const media = useMedia();
	const [currentIdx, setCurrentIdx] = useState(0);
	const [selected, setSelected] = useState(0);
	return (
		<div className={styles.shopCardsGroup}>
			<h1>{props.title}</h1>
			<div className={styles.shopContainer}>
				<div className={styles.productContainer}>
					{props.data.length > 0 &&
						props.data.map((_data, idx) => (
							<ProductCard
								idx={idx}
								key={_data.id}
								blur={idx !== selected}
								data={_data}
								deleteProduct={props.delete}
								updateCartNum={props.updateCartNum}
								update={props.update}
							/>
						))}
				</div>
				<Pagination className="pagination" activePage="1" pages="4" />
			</div>
		</div>
	);
};

export default ShopProductContent;
