/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import axios from 'commons/axios';
import decode from 'jwt-decode';
import { useMedia } from 'util/hook/useMedia';

import ProductCard from 'components/atoms/ProductCard ';
import Pagination from 'components/molecules/Pagination';
import ToolBox from 'components/molecules/ToolBox';
import Panel from 'components/molecules/Panel';
import AddInventory from 'components/molecules/AddInventory';

import styles from './index.css';

const JWT = 'storage_token_id';

const getUser = () => {
	const jwToken = getToken();
	if (isLogin()) {
		const user = decode(jwToken);
		return user;
	} else {
		return null;
	}
};

const getToken = token => {
	return localStorage.getItem(JWT);
};

const isLogin = () => {
	const jwToken = getToken();
	return !!jwToken;
};

const ShopProductContent = props => {
	const [cartNum, setCartNum] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(9);
	const indexOfLastPast = currentPage * postPerPage;
	const indexOfFirstPast = indexOfLastPast - postPerPage;
	const currentPosts = props.data.slice(indexOfFirstPast, indexOfLastPast);
	const paginate = pageNumber => setCurrentPage(pageNumber);

	useEffect(() => {
		updateCartNum();
	}, []);

	useEffect(() => {
		setCurrentPage(1);
	}, [props.title]);

	const update = product => {
		const _products = [...props.products.products];
		const _index = _products.findIndex(p => p.id === product.id);
		_products.splice(_index, 1, product);
		const _sProducts = [...props.products.sourceProducts];
		const _sIndex = _sProducts.findIndex(p => p.id === product.id);
		_sProducts.splice(_sIndex, 1, product);

		props.setProducts({
			products: _products,
			sourceProducts: _sProducts,
		});
	};

	const deleteProduct = id => {
		const _products = props.products.products.filter(p => p.id !== id);
		const _sProducts = props.products.sourceProducts.filter(p => p.id !== id);

		props.setProducts({
			products: _products,
			sourceProducts: _sProducts,
		});
	};

	const updateCartNum = async () => {
		const cartNum = await initCartNum();
		setCartNum(cartNum);
	};

	const initCartNum = async () => {
		const user = getUser() || {};
		const res = await axios.get('/carts', {
			params: {
				userId: user.email,
			},
		});
		const carts = res.data || [];
		const cartNum = carts.map(cart => cart.mount).reduce((a, value) => a + value, 0);
		return cartNum;
	};

	const search = text => {
		//1.  get New Array
		let _products = [...props.products.sourceProducts];
		//2. Filter New Array 回調函數
		_products = _products.filter(p => {
			const matchArray = p.name.match(new RegExp(text, 'gi'));
			// return matchArray !== null (matchArray不等於空)
			return !!matchArray;
		});
		//3. set State
		props.setProducts({ products: _products, sourceProducts: props.products.sourceProducts });
	};

	const toAdd = () => {
		Panel.open({
			component: AddInventory,
			callback: data => {
				if (data) {
					add(data);
				}
			},
		});
	};

	const add = product => {
		const _products = [...props.products.products];
		_products.push(product);
		const _sProducts = [...props.products.sourceProducts];
		_sProducts.push(product);

		props.setProducts({
			products: _products,
			sourceProducts: _sProducts,
		});
	};

	return (
		<div className={styles.shopCardsGroup}>
			<ToolBox search={search} cartNum={cartNum} toAdd={toAdd} />
			<h1>{props.title}</h1>
			<div className={styles.shopContainer}>
				<div className={styles.productContainer}>
					{currentPosts.length > 0 &&
						currentPosts.map((_data, idx) => (
							<ProductCard
								idx={idx}
								key={_data.id}
								data={_data}
								deleteProduct={deleteProduct}
								update={update}
								updateCartNum={updateCartNum}
							/>
						))}
				</div>
				<Pagination
					className="pagination"
					postPerPage={postPerPage}
					currentPage={currentPage}
					totalPosts={props.data.length}
					paginate={paginate}
				/>
			</div>
		</div>
	);
};

export default ShopProductContent;
