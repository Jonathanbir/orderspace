import React from 'react';
import dayjs from 'dayjs';

import { useNews } from 'models/news';

import Tag from 'components/atoms/Tag';
import Button from 'components/atoms/Button';
import Link from 'components/atoms/Link';

import styles from './index.css';

const { IMAGE_ENDPOINT } = process.env;

const ListCard = ({ data, page }) => {
	const [{ mediaTypes }, { getNews }] = useNews();
	const { cover, id, type, status, title, subtitle, publishTime } = data;

	const onTagClick = () => {
		const filtered = mediaTypes.filter(mt => mt.name === type);
		getNews({
			page: 1,
			per_page: 9,
			type: filtered[0].id,
		});
	};

	return (
		<Link to={page === 'reports' ? `/about/reports/content` : `/news/${id}`}>
			<div
				className={styles.listCard}
				style={status === 'ONLINE' ? { display: 'grid' } : { display: 'none' }}
			>
				<div className={styles.date}>
					<div className={styles.year}>{dayjs(publishTime).format('YYYY')}</div>
					<div className={styles.mon}>
						<span>{dayjs(publishTime).format('MMM')}</span>
						<br />
						<span>{dayjs(publishTime).format('DD')}</span>
					</div>
				</div>
				<div className={styles.content}>
					<div
						className={styles.cardImg}
						style={{
							backgroundImage: `url(${IMAGE_ENDPOINT}/${cover})`,
						}}
					/>
					<div className={styles.cardContent}>
						<Tag tags={type} onClick={onTagClick} />
						<h2>{title}</h2>
						<p>{subtitle}</p>
						<Button className={styles.moreButton} color="primary" variant="text" onClick={() => {}}>
							閱讀更多
						</Button>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ListCard;
