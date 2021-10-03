/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-disable no-mixed-operators */
import React, { useEffect } from 'react';

import { useMedia } from 'util/hook/useMedia';

import { scrollToOffset } from 'util/helper';

import Pagination from 'components/molecules/Pagination';

import styles from './index.css';

const Show = () => {
	const media = useMedia();

	useEffect(() => {
		scrollToOffset(0);
	}, []);

	return (
		<div className={styles.showWrapper}>
			<div className={styles.showContainer}>
				<div className={styles.banner}>
					<h1>SHOW</h1>
				</div>
			</div>
			<div className={styles.show}>
				<h2>PHOTOS</h2>
				<div className={styles.gridBox}>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW2</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.gridFront}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Are you ready for this?</span>
							</div>
						</div>
						<div className={styles.gridBack}>
							<div className={styles.gridInner}>
								<p>SHOW</p>
								<span>Coming Soon</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{media !== 'desktop' && <Pagination className="pagination" activePage="1" pages="4" />}
			<div className={styles.upBtn} type="outlined" onClick={() => scrollToOffset(0)} />
		</div>
	);
};

export default Show;
