import React from 'react';
import classnames from 'classnames';

import Previous from 'images/icon/prev.inline.svg';
import Next from 'images/icon/next.inline.svg';
import Dots from 'images/icon/atom-icon-action-ellipsis.inline.svg';

import styles from './index.css';

const Pagination = ({ postPerPage, totalPosts, currentPage, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<ul className="pagination">
			<Previous onClick={() => currentPage > 1 && paginate(currentPage - 1)} />
			{pageNumbers.map((number, idx) => {
				return (
					<li
						key={idx}
						className={
							currentPage === number ? classnames(styles.pageItem, styles.active) : styles.pageItem
						}
						onClick={() => paginate(number)}
					>
						{number}
					</li>
				);
			})}
			<Next
				onClick={() =>
					currentPage < Math.ceil(totalPosts / postPerPage) && paginate(currentPage + 1)
				}
			/>
		</ul>
	);
};

export default Pagination;
