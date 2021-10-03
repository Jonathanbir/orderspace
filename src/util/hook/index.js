import { useState, useEffect } from 'react';

export const useBoolean = (options = {}) => {
	const { onTrue = () => {}, onFalse = () => {}, defaultBoolean = false } = options;

	const [boolean, setState] = useState(defaultBoolean);

	const toggle = () => {
		if (boolean) {
			onFalse();
		} else {
			onTrue();
		}
		setState(!boolean);
	};

	const setFalse = () => {
		setState(false);
		onFalse();
	};

	const setTrue = () => {
		setState(true);
		onTrue();
	};

	return [boolean, { toggle, setFalse, setTrue }];
};

export const useSelect = ({ defaultValue = [], onChange, propsValue }) => {
	const [value, setState] = useState(defaultValue);

	const onChangeValue = newValue => {
		setState([newValue]);
		onChange([newValue]);
	};

	useEffect(() => {
		if (propsValue) {
			setState(propsValue);
		}
	}, [propsValue]);

	return [value, onChangeValue];
};

export const useCountdown = ({ defaultTime = 0 } = {}) => {
	const [leftTime, setCountdown] = useState(defaultTime);

	const cancelCouting = () => {
		setCountdown(0);
	};

	useEffect(() => {
		if (leftTime !== 0 && typeof leftTime === 'number') {
			setTimeout(() => {
				const left = leftTime - 1;
				setCountdown(left);
			}, 1000);
		}
	}, [leftTime]);

	return [leftTime, { setCountdown, cancelCouting }];
};
