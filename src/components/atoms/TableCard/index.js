import React from 'react';
import dayjs from 'dayjs';

import { useNews } from 'models/news';

import Tag from 'components/atoms/Tag';
import Button from 'components/atoms/Button';
import Link from 'components/atoms/Link';

import styles from './index.css';

const { IMAGE_ENDPOINT } = process.env;

const TableCard = ({ data }) => {
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
		<Link to={`/news/${id}`}>
			<div
				className={styles.listCard}
				style={status === 'ONLINE' ? { display: 'block' } : { display: 'none' }}
			>
				<div
					className={styles.cardImg}
					style={{
						backgroundImage: `url(${IMAGE_ENDPOINT}/${cover})`,
					}}
				/>
				<div className={styles.content}>
					<div className={styles.cardTitle}>
						<Tag className={styles.tag} tags={type} onClick={onTagClick} />
						<h2>{title}</h2>
						<p>{subtitle}</p>
					</div>
					<div className={styles.cardLink}>
						<span>{dayjs(publishTime).format('YYYY / MM / DD')}</span>

						<Button className={styles.moreButton} color="primary" variant="text" onClick={() => {}}>
							閱讀更多
						</Button>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default TableCard;
