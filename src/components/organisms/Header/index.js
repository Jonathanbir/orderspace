import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import { useModal } from 'models/modal';
import { useRouting } from 'models/routing';

import Button from 'components/atoms/Button';
import Navigation from 'components/molecules/Navigation';

import { useBoolean } from 'util/hook';

import MenuOpen from 'images/icon/menu-open.inline.svg';
import MenuClose from 'images/icon/menu-close.inline.svg';
import Logo from 'images/icon/logo-web.inline.svg';

import styles from './index.css';

const Header = () => {
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
						pushRoute({ pathname: '/', search: '' });
						closeMenu();
					}}
				/>
			</div>
			<Navigation navActive={active} closeMenu={closeMenu} />
			<div className={styles.joinBtn}>
				{/* <Button className={styles.button} color="primary" onClick={() => {}}>
					加入大誠
				</Button> */}
				<span id="memName">&nbsp;</span>
				<span id="spanLogin">
					<i class="fa fa-user-o"></i>
				</span>
				<a href="#" type="button" name="btn" value="10+20=?[0]" onClick="buyCar();">
					<i class="shopping cart icon"></i>
				</a>
				<i class="shopping cart icon"></i>
				<i class="arrow alternate circle down outline icon"></i>
			</div>
			{active ? (
				<MenuClose className={styles.hamburger} onClick={toggleMenu} />
			) : (
				<MenuOpen className={styles.hamburger} onClick={toggleMenu} />
			)}
		</header>
	);
};

export default Header;
