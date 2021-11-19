import React from 'react';
import axios from 'commons/axios';
import decode from 'jwt-decode';
import { toast } from 'react-toastify';
import Panel from 'components/molecules/Panel';
import EditInventory from 'components/molecules/EditInventory';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

import styles from './index.css';
const JWT = 'storage_token_id';

const getToken = token => {
	return localStorage.getItem(JWT);
};

const isLogin = () => {
	const jwToken = getToken();
	return !!jwToken;
};

const getUser = () => {
	const jwToken = getToken();
	if (isLogin()) {
		const user = decode(jwToken);
		return user;
	} else {
		return null;
	}
};

const ProductCard = ({ data, deleteProduct, update, updateCartNum }) => {
	const toEdit = () => {
		Panel.open({
			component: EditInventory,
			props: { product: data, deleteProduct: deleteProduct },
			callback: data => {
				console.log('data', data);
				if (data) {
					update(data);
				}
			},
		});
	};

	const addCart = async () => {
		if (!isLogin()) {
			toast.info('please Login First');
			return;
		}
		try {
			const user = getUser() || {};
			const { id, name, image, price } = data;
			//取的Product的Id
			const res = await axios.get(`/carts?productId=${id}`);
			const carts = res.data;
			if (carts && carts.length > 0) {
				const cart = carts[0];
				//總計共有幾個ㄧ樣的Product數量
				cart.mount += 1;
				await axios.put(`/carts/${cart.id}`, cart);
			} else {
				const cart = {
					productId: id,
					name,
					image,
					price,
					mount: 1,
					userId: user.email,
				};
				await axios.post('carts', cart).then(res => console.log(res.data));
			}
			toast.success('Add Cart Success');
			updateCartNum;
		} catch (error) {
			toast.error('Add Cart Failed');
		}
	};

	const renderMangerBtn = () => {
		const user = getUser() || {};
		if (user.type === 1) {
			return (
				<div className="p-head has-text-right" onClick={toEdit}>
					<span className="icon edit-btn">
						<FontAwesomeIcon className={styles.fontEdit} icon={faEdit} />
					</span>
				</div>
			);
		}
	};

	return (
		<div className={styles.productCard}>
			{renderMangerBtn()}
			<div className={styles.productImg}>
				<div
					className={styles.img}
					style={{
						backgroundImage: `url(${data.image})`,
					}}
				>
					<div className={styles.productText}>BUY</div>
				</div>
			</div>
			<h2>{data.name}</h2>
			<p>＄{data.price}</p>
			<FontAwesomeIcon className={styles.fontIcon} icon={faShoppingCart} onClick={addCart} />
		</div>
	);
};

export default ProductCard;
