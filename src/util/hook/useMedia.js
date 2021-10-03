import { useState, useEffect, useLayoutEffect } from 'react';

export const useMedia = () => {
	const phoneMedia = window.matchMedia('(max-width: 599px)');
	const tabletMedia = window.matchMedia('(max-width: 1279px) and (min-width: 600px)');
	const desktopMedia = window.matchMedia('(min-width: 1280px)');

	let defaultMedia = 'desktop';

	if (phoneMedia.matches) {
		defaultMedia = 'phone';
	}

	if (tabletMedia.matches) {
		defaultMedia = 'tablet';
	}

	const [media, setMedia] = useState(defaultMedia);

	const handleMediaChange = mediaName => mediaHandler => {
		if (mediaHandler.matches && mediaName !== media) {
			setMedia(mediaName);
		}
	};

	useEffect(() => {
		const phoneHandler = handleMediaChange('phone');
		const tabletHandler = handleMediaChange('tablet');
		const desktopHandler = handleMediaChange('desktop');

		phoneMedia.addListener(phoneHandler);
		tabletMedia.addListener(tabletHandler);
		desktopMedia.addListener(desktopHandler);

		return () => {
			phoneMedia.removeListener(phoneHandler);
			tabletMedia.removeListener(tabletHandler);
			desktopMedia.removeListener(desktopHandler);
		};
	}, [media]);

	return media;
};

export const useWindowSize = () => {
	const [size, setSize] = useState([0, 0]);

	useLayoutEffect(() => {
		const updateSize = () => {
			setSize([window.innerWidth, window.innerHeight]);
		};
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	return size;
};
