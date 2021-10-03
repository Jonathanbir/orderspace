import React, { useState } from 'react';
import classnames from 'classnames';

import Link from 'components/atoms/Link';

import { useMedia } from 'util/hook/useMedia';

import styles from './index.css';

const Navigator = ({ navActive, closeMenu = () => {} }) => {
	const media = useMedia();
	const [itemActive, setItemActive] = useState('');

	function handleItemActive(item) {
		if (media !== 'desktop') {
			if (itemActive !== item) {
				setItemActive(item);
			} else {
				setItemActive('');
			}
		}
	}

	return (
		<nav className={classnames(styles.nav, { [styles.active]: navActive })}>
			<div>
				<div className={classnames(styles.item, { [styles.itemActive]: itemActive === 'about' })}>
					<Link to="/shop" className={styles.moreBtn} onClick={() => handleItemActive('about')}>
						SHOP
					</Link>
				</div>
				<div className={styles.item}>
					<Link to="/show" onClick={closeMenu}>
						SHOW
					</Link>
				</div>
				<div
					className={classnames(styles.item, {
						[styles.itemActive]: itemActive === 'companyService',
					})}
				>
					<Link
						to="/news"
						className={styles.moreBtn}
						onClick={() => handleItemActive('companyService')}
					>
						NEWS
					</Link>
				</div>
				<div className={styles.item}>
					<Link to="/brand" onClick={closeMenu}>
						BRAND
					</Link>
				</div>
				<div className={styles.item}>
					<Link to="/contact" onClick={closeMenu}>
						CONTACT
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navigator;
