import React from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Panel from 'components/molecules/Panel';
import Cart from 'components/molecules/Cart';
import styles from './index.css';

class ToolBox extends React.Component {
	state = {
		searchText: '',
	};

	handleChange = e => {
		const value = e.target.value;
		this.setState({
			searchText: value,
		});
		this.props.search(value);
	};

	clearSearchText = () => {
		this.setState({
			searchText: '',
		});
		this.props.search('');
	};

	goCart = () => {
		if (!global.auth.isLogin()) {
			this.props.history.push('/login');
			toast.info('please Login First');
			return;
		}
		this.props.history.push('/cart');
	};

	toCart = () => {
		Panel.open({
			component: Cart,
			props: '',
			callback: data => {
				if (data === 'logout') {
					props.history.go(0);
				}
			},
		});
	};

	render() {
		return (
			<div>
				<div className="tool-box">
					<div className="logo-text">
						<FontAwesomeIcon
							className={styles.fontPlusIcon}
							icon={faPlusSquare}
							onClick={this.props.toAdd}
						/>
					</div>
					<div className="search-box">
						<div className="field has-addons">
							<p className="control">
								<input
									className="input search-input"
									type="text"
									placeholder="Search Product"
									value={this.state.searchText}
									onChange={this.handleChange}
								/>
							</p>
							<div className="control" onClick={this.clearSearchText}>
								<button className="button is-static">x</button>
							</div>
						</div>
					</div>
					<div className="cart-box" onClick={this.goCart}>
						<FontAwesomeIcon
							className={styles.fontIcon}
							icon={faShoppingCart}
							onClick={this.toCart}
						/>
						<span className="cart-num">({this.props.cartNum})</span>
					</div>
				</div>
			</div>
		);
	}
}
export default ToolBox;
