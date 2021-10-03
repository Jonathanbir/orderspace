import React, { useMemo } from 'react';
import classnames from 'classnames';

import { useService } from 'models/service';

import ServiceContent from 'components/atoms/ServiceContent';

import styles from './index.css';

const ServiceContentGroup = ({ type, selected }) => {
	const [{ serviceIntroList }] = useService();
	const filteredList = useMemo(() => {
		return serviceIntroList.filter(s => s.type === (type ? 'PROPERTY' : 'LIFE'));
	}, [type]);

	if (filteredList.length > 0 && filteredList[selected].svy_url) {
		return (
			<div className={styles.wrapper}>
				<h3>
					由最專業的大誠保經
					<br />
					提供最有保障的保單健檢
				</h3>
				<div className={classnames(styles.serviceContentGroup, styles.svyWrapper)}>
					<iframe
						title={filteredList[selected].name}
						width="100%"
						height={600}
						src={filteredList[selected].svy_url}
						allowTransparency
						frameBorder={0}
					/>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.serviceContentGroup}>
			<span />
			{filteredList.length > 0 &&
				filteredList[selected].products.map(p => (
					<ServiceContent key={p.id} title={p.title} content={p.description} />
				))}
		</div>
	);
};

export default ServiceContentGroup;
