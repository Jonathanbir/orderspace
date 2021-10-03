import React from 'react';
import classnames from 'classnames';

import ListCard from 'components/atoms/ListCard';
import TableCard from 'components/atoms/TableCard';

import styles from './index.css';

const NewsContentGroup = ({ type, data }) => {
	return (
		<div className={classnames(type ? styles.listGroup : styles.cardGroup)}>
			{data.length > 0 &&
				data.map(_data =>
					type ? (
						<ListCard key={_data.id} data={_data} />
					) : (
						<TableCard key={_data.id} data={_data} />
					),
				)}
		</div>
	);
};

export default NewsContentGroup;
