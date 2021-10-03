/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useMedia } from 'util/hook/useMedia';
import classnames from 'classnames';
import Link from 'components/atoms/Link';

import FaxIcon from 'images/icon/atom-icon-style-fax.inline.svg';
import PhoneIcon from 'images/icon/atom-icon-style-phone.inline.svg';
import AddressIcon from 'images/icon/atom-icon-style-location.inline.svg';
import ManegerIcon from 'images/icon/atom-icon-style-manager.inline.svg';
import ChangeIcon from 'images/icon/atom-icon-chevron-change.inline.svg';
import styles from './index.css';

const LocationCard = ({ className, data }) => {
	const media = useMedia();
	const [active, setActive] = useState(false);

	useEffect(() => {
		setActive(false);
	}, [data]);

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events
		<div className={styles.locationCard}>
			<div
				className={classnames(styles.cardItem, active ? styles.active : undefined, className)}
				style={{ justifyContent: ' space-between' }}
			>
				<h2>{data.name}</h2>
				<ChangeIcon
					className={styles.arrow}
					style={data.images.length > 0 ? { display: 'block' } : { display: 'none' }}
					onClick={() => setActive(!active)}
				/>
			</div>
			<Link
				className={styles.link}
				to={`http://maps.google.com/maps?daddr=${data.address}`}
				isExternal
			>
				<div className={styles.cardItem}>
					<AddressIcon />
					<p>{data.address}</p>
				</div>
			</Link>
			<div
				className={styles.contactContent}
				style={data.images.length > 0 ? {} : { marginBottom: '24px' }}
			>
				<a className={styles.link} href={`tel:${data.phone}`}>
					<div
						className={styles.cardItems}
						style={data.phone.length === 0 ? { display: 'none' } : {}}
					>
						<PhoneIcon />
						<p>{data.phone}</p>
					</div>
				</a>
				{data.fax.length > 0 && <div className={styles.line} />}
				<div className={styles.cardItems} style={data.fax.length === 0 ? { display: 'none' } : {}}>
					<FaxIcon />
					<p style={media === 'phone' ? { width: '100px' } : {}}>{data.fax}</p>
				</div>
				{media === 'desktop' && data.managerName.length > 0 && <div className={styles.line} />}
				{media === 'phone' &&
					(data.phone.length === 0 || data.fax.length === 0) &&
					data.managerName.length > 0 && <div className={styles.line} />}
				<div
					className={styles.cardItems}
					style={data.managerName.length === 0 ? { display: 'none' } : {}}
				>
					<ManegerIcon />
					<p>{data.managerName}</p>
				</div>
			</div>
			<div
				className={classnames(
					styles.cardItem,
					styles.content,
					active ? styles.active : undefined,
					className,
				)}
				style={data.images.length > 0 ? { display: 'flex' } : { display: 'none' }}
			>
				{data.images.map((value, idx) => (
					<div
						className={styles.img}
						style={{
							backgroundImage: `url(${data.images[idx].url})`,
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default LocationCard;
