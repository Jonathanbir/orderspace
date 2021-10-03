/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import { useHistory } from 'models/routing';

const onClickHandler = (callback, history) => {
	return e => {
		e.preventDefault();
		history.push(e.currentTarget.pathname);
		callback(e);
	};
};

const Link = ({ className, to, onClick = () => {}, children, isExternal = false }) => {
	const history = useHistory();

	return (
		<a
			className={className}
			href={to}
			role="button"
			tabIndex={0}
			target={isExternal ? '_blank' : '_self'}
			onClick={isExternal ? () => {} : onClickHandler(onClick, history)}
			onKeyPress={() => {}}
		>
			{children}
		</a>
	);
};

export default Link;
