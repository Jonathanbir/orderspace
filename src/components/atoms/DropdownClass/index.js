/* eslint-disable array-callback-return */
/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import classnames from 'classnames';

import DropdownClassBasic from 'components/atoms/DropdownClassBasic';

import { useSelect } from 'util/hook';

import ArrowIcon from 'images/icon/atom-icon-chevron-down.inline.svg';

import styles from './index.css';

const DropdownClass = ({
	className,
	valueClassName,
	panelClassName,
	defaultValue = [],
	value: propsValue,
	opt,
	onChange = () => {},
	cityActive,
	onOpen = () => {},
	onClose = () => {},
	placeholder,
	options = [],
	disabled = false,
	error = false,
	empty = false,
	emptyText = '',
	EmptyImage = () => {},
}) => {
	const [value, onChangeValue] = useSelect({ defaultValue, onChange, propsValue });
	const [open, onChangeOpenValue] = useSelect({ defaultValue, onOpen, opt });
	const hasValue =
		value.length > 0 &&
		options.some(item =>
			item.items.map(val => {
				val === value[0].value;
			}),
		);

	return (
		<DropdownClassBasic
			className={classnames(className, {
				[styles.dropdownactive]: cityActive,
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
			onOpen={onOpen}
			onClose={onClose}
			panelClassName={classnames(styles.panel, empty && styles.emptyPanel, panelClassName)}
			panelComponent={({ closePanel }) =>
				empty ? (
					<div className={styles.emptyContent}>
						<EmptyImage />
						<p>{emptyText}</p>
					</div>
				) : (
					<>
						{options.map(values => (
							<div
								key={values.idx}
								className={classnames(styles.option, {
									[styles.isSelected]: value.length > 0 && values.value === value[0].value,
								})}
								onClick={() => {
									closePanel();
									onChangeValue(values[0].items);
									onChangeOpenValue(!open);
								}}
								role="presentation"
							>
								<div className={styles.dropdownTitle}>{values.name}</div>
								{values.items.map(val => {
									return (
										<div
											key={values.value}
											className={classnames(styles.dropdownOption, {
												[styles.isSelected]: value.length > 0 && values.value === value[0].value,
											})}
											onClick={() => {
												onChangeValue(val);
												onChangeOpenValue(!open);
												closePanel();
											}}
											role="presentation"
										>
											{val.label}
										</div>
									);
								})}
							</div>
						))}
					</>
				)
			}
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
	onOpen,
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
		<DropdownClass
			className={classnames(styles.dropdown, dropdownClassName)}
			defaultValue={defaultValue}
			value={value}
			placeholder={placeholder}
			disabled={disabled}
			error={error}
			options={options}
			onChange={onChange}
			onOpen={onOpen}
		/>
		{statusComponent && (
			<div className={classnames(styles.status, statusClassName)}>{statusComponent()}</div>
		)}
	</div>
);

export default DropdownClass;
