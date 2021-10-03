/* eslint-disable react/self-closing-comp */
/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import classnames from 'classnames';

import DropdownBasic from 'components/atoms/DropdownBasic';

import { useSelect } from 'util/hook';

import ArrowIcon from 'images/icon/atom-icon-chevron-down.inline.svg';

import styles from './index.css';

const Dropdown = ({
	className,
	valueClassName,
	panelClassName,
	defaultValue = [],
	value: propsValue,
	onChange = () => {},
	placeholder,
	options = [],
	disabled = false,
	error = false,
	empty = false,
	emptyText = '',
	areaActive,
	type,
	onOpen = () => {},
	onClose = () => {},
	EmptyImage = () => {},
}) => {
	const [value, onChangeValue] = useSelect({ defaultValue, onChange, propsValue });
	const hasValue = value.length > 0 && options.some(item => item.value === value[0].value);

	return (
		<DropdownBasic
			className={classnames(className, {
				[styles.dropdownactive]: areaActive,
			})}
			disabled={disabled}
			valueComponent={({ isOpen }) => (
				<div
					className={classnames(
						styles.value,
						{
							[styles.hasValue]: hasValue,
							[styles.isOpen]: isOpen,
							[styles.error]: error,
							[styles.disabled]: disabled,
						},
						valueClassName,
					)}
				>
					<div
						className={classnames({
							[styles.placeholder]: !hasValue,
						})}
					>
						{hasValue ? value[0].label : placeholder}
					</div>
					<ArrowIcon />
				</div>
			)}
			panelClassName={classnames(styles.panel, empty && styles.emptyPanel, panelClassName)}
			panelComponent={({ closePanel }) =>
				empty ? (
					<div className={styles.emptyContent}>
						<EmptyImage />
						<p>{emptyText}</p>
					</div>
				) : (
					<>
						{type === 'location' && <div className={styles.dropTitle}>請選擇行政區</div>}
						{options.map((option, idx) => (
							<div
								key={option.value}
								className={classnames(styles.option, {
									[styles.isSelected]: value.length > 0 && option.value === value[0].value,
									[styles.gray]: type === 'location',
								})}
								onClick={() => {
									onChangeValue(option);
									closePanel();
								}}
								role="presentation"
							>
								{type === 'location' ? idx !== 0 && option.label : option.label}
							</div>
						))}
					</>
				)
			}
			onOpen={onOpen}
			onClose={onClose}
		/>
	);
};

export const DropdownField = ({
	className,
	dropdownClassName,
	defaultValue,
	value,
	label = '',
	required = false,
	disabled = false,
	onChange,
	placeholder,
	options,
	statusComponent,
	statusClassName,
	error = false,
}) => (
	<div className={classnames(styles.dropdownField, className, { [styles.disabled]: disabled })}>
		<div className={styles.header}>
			<div className={styles.label}>{label}</div>
			{required && <div className={styles.required}>必選</div>}
		</div>
		<Dropdown
			className={classnames(styles.dropdown, dropdownClassName)}
			defaultValue={defaultValue}
			value={value}
			placeholder={placeholder}
			disabled={disabled}
			error={error}
			options={options}
			onChange={onChange}
		/>
		{statusComponent && (
			<div className={classnames(styles.status, statusClassName)}>{statusComponent()}</div>
		)}
	</div>
);

export default Dropdown;
