import React, { useRef, useEffect } from 'react';
import classnames from 'classnames';
import { useTransition, animated, config } from 'react-spring';

import { useBoolean } from 'util/hook';
import { isInternetExplorer } from 'util/helper';

import styles from './index.css';

export const focusInChildren = (relatedTarget, currentTarget) => {
	if (relatedTarget === null) {
		return false;
	}

	if (relatedTarget === currentTarget) {
		return true;
	}

	return focusInChildren(relatedTarget.parentNode, currentTarget);
};

const DropdownBasic = ({
	className,
	valueClassName,
	panelClassName,
	valueComponent,
	panelComponent,
	keepOpen = false,
	preventToogleOnClick = false,
	preventFocusOnDropdown = false,
	disabled = false,
	onClose,
	onOpen,
}) => {
	const refValue = useRef(null);
	const refPanel = useRef(null);
	const [isOpen, { toggle: togglePanel, setFalse: closePanel, setTrue: openPanel }] = useBoolean({
		onFalse: onClose,
		onTrue: onOpen,
		defaultBoolean: keepOpen,
	});

	useEffect(() => {
		if (refPanel.current && isOpen && !preventFocusOnDropdown) {
			// Focus on panel after dropdown open
			refPanel.current.focus();
		}
	}, [isOpen, refPanel.current]);

	const onBlur = ({ relatedTarget }) => {
		// For IE, relatedTarget would be null.
		// https://github.com/facebook/react/issues/3751#issuecomment-415866094
		if (isInternetExplorer()) {
			setTimeout(() => {
				const relatedTargetOnIE = document.activeElement;

				if (
					!keepOpen &&
					!focusInChildren(relatedTargetOnIE, refPanel.current) &&
					!focusInChildren(relatedTargetOnIE, refValue.current)
				) {
					closePanel();
				}
			}, 30);

			return;
		}

		if (
			!keepOpen &&
			!focusInChildren(relatedTarget, refPanel.current) &&
			!focusInChildren(relatedTarget, refValue.current)
		) {
			closePanel();
		}
	};

	const focusPanel = () => {
		if (refPanel.current) {
			refPanel.current.focus();
		}
	};

	const transitions = useTransition(isOpen, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: config.stiff,
	});

	return (
		<div className={classnames(styles.dropdownBasic, className, { [styles.dropdown]: isOpen })}>
			<div
				ref={refValue}
				className={classnames(styles.content, valueClassName, { [styles.disabled]: disabled })}
				onClick={() => {
					if (!preventToogleOnClick && !disabled) {
						togglePanel();
					}
				}}
				onKeyPress={() => {}}
				role="button"
				tabIndex="0"
			>
				{valueComponent({ isOpen, openPanel, closePanel, focusPanel, onBlur })}
			</div>
			{transitions(
				(style, item, key) =>
					item && (
						<animated.div
							key={key}
							style={style}
							ref={refPanel}
							className={classnames(styles.menu, panelClassName)}
							onBlur={onBlur}
							role="button"
							tabIndex="0"
						>
							{panelComponent({ isOpen, closePanel, openPanel, focusPanel })}
						</animated.div>
					),
			)}
		</div>
	);
};

export default DropdownBasic;
