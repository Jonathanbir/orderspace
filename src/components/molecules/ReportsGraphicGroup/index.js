import React from 'react';

import { useMedia } from 'util/hook/useMedia';

import ReportsSubTitle from 'components/atoms/ReportsSubTitle';
import ListCard from 'components/atoms/ListCard';
import TableCard from 'components/atoms/TableCard';
import Pagination from 'components/molecules/Pagination';

import styles from './index.css';

const ReportsGraphicGroup = ({ data }) => {
	const media = useMedia();

	return (
		<div className={styles.reportsGraphicGroup}>
			<ReportsSubTitle name="圖文報導" />
			<div className={styles.reportContent}>
				{media === 'desktop'
					? data.length > 0 &&
					  data.map(_data => <ListCard page="reports" data={_data} key={_data.id} />)
					: data.length > 0 && data.map(_data => <TableCard data={_data} key={_data.id} />)}
			</div>
			<Pagination className={styles.pagination} activePage="1" pages="4" />
		</div>
	);
};

export default ReportsGraphicGroup;
