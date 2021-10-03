import React from 'react';
import classnames from 'classnames';

import Link from 'components/atoms/Link';

import { isExist } from 'util/helper';

import styles from './index.css';

export const ButtonLink = ({
	children,
	className,
	type = 'internal',
	href,
	variant = 'normal',
	onClick = () => {},
	size,
	Icon,
	color = 'primary',
	disabled = false,
}) => {
	if (type === 'external') {
		return (
			<a
				className={classnames(
					styles.button,
					styles.link,
					className,
					{
						[styles.disabled]: disabled,
					},
					isExist(variant) && styles[variant],
					isExist(size) && styles[size],
					isExist(color) && styles[color],
				)}
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				onClick={onClick}
			>
				<div>
					{Icon && <Icon className={styles.icon} />}
					{children}
				</div>
			</a>
		);
	}

	return (
		<Link
			className={classnames(
				styles.button,
				styles.link,
				className,
				{
					[styles.disabled]: disabled,
				},
				isExist(variant) && styles[variant],
				isExist(size) && styles[size],
				isExist(color) && styles[color],
			)}
			to={href}
			onClick={onClick}
		>
			<div>
				{Icon && <Icon className={styles.icon} />}
				{children}
			</div>
		</Link>
	);
};

const Button = ({
	children,
	className,
	variant = 'normal', // normal, outlined, invert, text
	onClick = () => {},
	size,
	Icon,
	color,
	disabled = false,
}) => (
	<button
		className={classnames(
			styles.button,
			className,
			{
				[styles.disabled]: disabled,
			},
			isExist(variant) && styles[variant],
			isExist(size) && styles[size],
			isExist(color) && styles[color],
		)}
		type="button"
		onClick={() => {
			if (!disabled) {
				onClick();
			}
		}}
	>
		<div>
			{Icon && <Icon className={classnames(styles.icon, { [styles.margin]: isExist(children) })} />}
			{children}
		</div>
	</button>
);

export default Button;
