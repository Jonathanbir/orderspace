/* eslint-disable indent */
import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import qs from 'qs';

import { useNews } from 'models/news';
import { useRouting } from 'models/routing';

import Button from 'components/atoms/Button';

import { useMedia } from 'util/hook/useMedia';

import Search from 'images/icon/search.inline.svg';

import styles from './index.css';

const SearchBar = ({
	id,
	active,
	setActive,
	showBtn,
	locationList,
	citySelected,
	areaSelected,
	type,
	getLocation = () => {},
	setAreaSelected = () => {},
	setCitySelected = () => {},
	setSearch = () => {},
}) => {
	const media = useMedia();
	const refSearch = useRef(null);
	const [searchKey, setSearchKey] = useState('');
	const [, { getNews }] = useNews();
	const [{ search }] = useRouting();
	const query = qs.parse(search, { ignoreQueryPrefix: true });

	const focusInChildren = (relatedTarget, currentTarget) => {
		if (relatedTarget === null) {
			return false;
		}

		if (relatedTarget === currentTarget) {
			return true;
		}

		return focusInChildren(relatedTarget.parentNode, currentTarget);
	};

	const onBlur = ({ relatedTarget = null }) => {
		if (!focusInChildren(relatedTarget, refSearch.current)) {
			setActive(false);
		}
	};

	const handleSearch = () => {
		getNews({ page: 1, per_page: 9, search: searchKey });
	};

	useEffect(() => {
		setSearchKey(query.search);
	}, []);

	useEffect(() => {
		if (refSearch.current && active) {
			refSearch.current.focus();
		}
	}, [active, refSearch.current]);

	return (
		<div
			className={
				showBtn
					? classnames(styles.searchLocationBar, { [styles.active]: active })
					: classnames(styles.searchBar, {
							[styles.active]: active || (media === 'desktop' && searchKey),
					  })
			}
			id={id}
			onBlur={searchKey || media === 'phone' ? '' : onBlur}
			ref={refSearch}
		>
			<button
				className={classnames(styles.input, { [styles.searchMobile]: type === 'location' })}
				onClick={() => setActive(true)}
				type="button"
			>
				<Search />
				<input
					type="text"
					value={searchKey}
					onChange={e => setSearchKey(e.target.value)}
					placeholder="輸入關鍵字搜尋"
					onKeyPress={e => {
						if (e.key === 'Enter' || e.charCode === 32) {
							handleSearch();
						}
					}}
				/>
			</button>
			<Button
				className={showBtn ? classnames(styles.submit, styles.showBtn) : styles.submit}
				color="primary"
				onClick={() => {
					if (id === 'locationSearchbar') {
						getLocation({
							city: citySelected,
							area: areaSelected,
							search: searchKey,
						});
						setSearch(true);
						if (locationList.length === 0) {
							setCitySelected();
							setAreaSelected();
						}
					} else {
						handleSearch();
					}
				}}
				disabled={!searchKey}
			>
				搜尋
			</Button>
		</div>
	);
};

export default SearchBar;
