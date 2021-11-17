import React, { useEffect, useState, useMemo } from 'react';
import axios from 'commons/axios';
import decode from 'jwt-decode';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CartItem from 'components/atoms/CartItem';
import formatPrice from '../../../commons/helper';
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

const Card = () => {
	const [carts, setCarts] = useState([]);

	useEffect(() => {
		const user = getUser() || {};
		axios.get(`/carts?userId=${user.email}`).then(res => {
			setCarts(res.data);
		});
	}, []);

	const totalPrice = useMemo(() => {
		const totalPrice = carts
			.map(cart => cart.mount * parseInt(cart.price))
			.reduce((a, value) => a + value, 0);
		return formatPrice(totalPrice);
	}, [carts]);

	const updateCart = cart => {
		const newCarts = [...carts];
		const _index = newCarts.findIndex(c => c.id === cart.id);
		newCarts.splice(_index, 1, cart);
		setCarts(newCarts);
	};

	const deleteCart = cart => {
		const _carts = carts.filter(c => c.id !== cart.id);
		setCarts(_carts);
	};

	return (
		<div className="cart-page">
			<p className="title has-text-centered">Cart Page</p>
			<div className="cart-list">
				<TransitionGroup component={null}>
					{carts.map(cart => (
						<CSSTransition className="cart-item" timeout={300} key={cart.id}>
							<CartItem key={cart.id} cart={cart} updateCart={updateCart} deleteCart={deleteCart} />
						</CSSTransition>
					))}
				</TransitionGroup>
			</div>
			{carts.length === 0 && <div className="no-cart">NO GOODS</div>}
			<div className="cart-total">
				Total: <span className="total-price">${totalPrice}</span>
			</div>
		</div>
	);
};
export default Card;
