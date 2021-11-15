import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import { useModal } from 'models/modal';
import { useRouting } from 'models/routing';

import Navigation from 'components/molecules/Navigation';

import { useBoolean } from 'util/hook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import MenuOpen from 'images/icon/menu-open.inline.svg';
import MenuClose from 'images/icon/menu-close.inline.svg';
import Logo from 'images/icon/logo-web.inline.svg';

import styles from './index.css';

const Header = ({ memberName }) => {
	const [, { setModalBackgroundScrollY, restoreModalBackgroundScrollY }] = useModal();
	const [active, { toggle: toggleMenu, setFalse: closeMenu }] = useBoolean({
		onTrue: setModalBackgroundScrollY,
		onFalse: restoreModalBackgroundScrollY,
	});
	const [scroll, setScroll] = useState(false);
	const [, { pushRoute }] = useRouting();

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 0) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		});
	}, [scroll]);

	return (
		<header
			className={classnames(
				styles.header,
				{ [styles.active]: active },
				{ [styles.scroll]: scroll },
			)}
		>
			<div className={styles.logoImg}>
				<Logo
					className={styles.backHomeBtn}
					role="button"
					onKeyPress={() => {}}
					tabIndex={0}
					onClick={() => {
						pushRoute({ pathname: '/' });
						closeMenu();
					}}
				/>
			</div>
			<Navigation navActive={active} closeMenu={closeMenu} />
			{memberName === '' ? (
				<div className={styles.joinBtn}>
					<p>Login in</p>
				</div>
			) : (
				<div className={styles.joinBtn}>
					<span className="memName">{memberName}</span>
					<FontAwesomeIcon className={styles.fontIcon} icon={faUser} />
					<FontAwesomeIcon className={styles.fontIcon} icon={faShoppingCart} />
				</div>
			)}
			{active ? (
				<MenuClose className={styles.hamburger} onClick={toggleMenu} />
			) : (
				<MenuOpen className={styles.hamburger} onClick={toggleMenu} />
			)}
		</header>
	);
};

export default Header;
