import React, { useState } from 'react';
import classnames from 'classnames';
import qs from 'qs';

import { useNews } from 'models/news';
import { useRouting } from 'models/routing';

import Dropdown from 'components/atoms/Dropdown';
import SearchBar from 'components/atoms/SearchBar';

import { useMedia } from 'util/hook/useMedia';

import ListIcon from 'images/icon/list.inline.svg';
import TableIcon from 'images/icon/table.inline.svg';

import styles from './index.css';

const ToolBar = ({ type, setType }) => {
	const media = useMedia();
	const [active, setActive] = useState(false);
	const [{ mediaTypes }] = useNews();
	const [{ search }, { replaceRoute }] = useRouting();
	const [, { getNews }] = useNews();
	const query = qs.parse(search, { ignoreQueryPrefix: true });
	const filterOptions = [
		{ value: 0, label: '全部' },
		...mediaTypes.map(({ id, name }) => ({ value: id, label: name })),
	];

	return (
		<div className={styles.toolBar}>
			<div>
				<Dropdown
					className={classnames(styles.filterDropdown, {
						[styles.active]: active,
					})}
					valueClassName={classnames(styles.filterDropdownValue, { [styles.hideValue]: active })}
					panelClassName={styles.filterDropdownPanel}
					options={filterOptions}
					defaultValue={[]}
					value={
						query.type
							? filterOptions.filter(fo => fo.value === parseInt(query.type, 10))
							: [{ value: 0, label: '全部' }]
					}
					onOpen={() => {
						if (media !== 'desktop') {
							setActive(false);
						}
					}}
					onChange={e => {
						getNews({
							page: 1,
							per_page: 9,
							type: e[0].value,
						});
					}}
				/>
				<SearchBar id="searchbar" setActive={setActive} active={active} />
			</div>
			<div className={styles.switchType}>
				<button
					type="button"
					className={styles.iconBtn}
					onClick={() => {
						setType(true);
						replaceRoute({
							search: qs.stringify({ ...query, display: 'list' }, { addQueryPrefix: true }),
						});
					}}
				>
					<ListIcon fill={type ? '#2c2c2c' : '#a8a8a8'} />
				</button>
				<button
					type="button"
					className={styles.iconBtn}
					onClick={() => {
						setType(false);
						replaceRoute({
							search: qs.stringify({ ...query, display: 'card' }, { addQueryPrefix: true }),
						});
					}}
				>
					<TableIcon fill={type ? '#a8a8a8' : '#2c2c2c'} />
				</button>
			</div>
		</div>
	);
};

export default ToolBar;
