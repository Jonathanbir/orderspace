import React from 'react';
import classnames from 'classnames';

import Previous from 'images/icon/prev.inline.svg';
import Next from 'images/icon/next.inline.svg';
import Dots from 'images/icon/atom-icon-action-ellipsis.inline.svg';

import styles from './index.css';

const Pagination = ({ className, activePage = 1, pages = 1, onClick = () => {} }) => {
	const pageArr = [];
	for (let i = 1; i <= pages; i += 1) {
		pageArr.push(i);
	}

	if (pageArr.length > 5) {
		return (
			<div className={classnames(styles.wrapper, className)}>
				<Previous onClick={() => activePage > pageArr[0] && onClick(activePage - 1)} />
				{pageArr.map((p, idx) => (
					<div style={{ display: 'flex', alignItems: 'center' }} key={p}>
						<div
							className={classnames(styles.pageWrapper, {
								[styles.activePage]: activePage === p,
								[styles.showPage]:
									idx === 0 ||
									idx === pageArr.indexOf(activePage) - 1 ||
									idx === pageArr.indexOf(activePage) ||
									idx === pageArr.indexOf(activePage) + 1 ||
									idx === pageArr.length - 1,
							})}
							onClick={() => onClick(p)}
							onKeyPress={() => {}}
							role="button"
							tabIndex={0}
						>
							{p}
						</div>
						{pageArr.indexOf(activePage) !== 0 &&
							pageArr.indexOf(activePage) !== 1 &&
							pageArr.indexOf(activePage) !== 2 &&
							idx === 0 && <Dots className={styles.dots} />}
						{pageArr.indexOf(activePage) !== pageArr.length - 1 &&
							pageArr.indexOf(activePage) !== pageArr.length - 2 &&
							pageArr.indexOf(activePage) !== pageArr.length - 3 &&
							idx === pageArr.length - 2 && <Dots className={styles.dots} />}
					</div>
				))}
				<Next onClick={() => activePage < pageArr[pageArr.length - 1] && onClick(activePage + 1)} />
			</div>
		);
	}

	return (
		<div className={classnames(styles.wrapper, className)}>
			<Previous onClick={() => activePage > pageArr[0] && onClick(activePage - 1)} />
			{pageArr.map(p => (
				<div
					key={p}
					className={classnames(styles.pageWrapper, {
						[styles.activePage]: activePage === p,
						[styles.showPage]: true,
					})}
					onClick={() => onClick(p)}
					onKeyPress={() => {}}
					role="button"
					tabIndex={0}
				>
					{p}
				</div>
			))}
			<Next onClick={() => activePage < pageArr[pageArr.length - 1] && onClick(activePage + 1)} />
		</div>
	);
};

export default Pagination;
