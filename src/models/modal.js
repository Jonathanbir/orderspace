import { createAction, handleActions } from 'redux-actions';
import classnames from 'classnames';
import { map, filter } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import _ from 'lodash';

import { useRedux } from 'util/hook/redux';
import { isExist } from 'util/helper';

export const openModal = createAction('OPEN_MODAL', ({ category, type, data = {} }) => ({
	category,
	type,
	data,
}));

export const closeModal = createAction('CLOSE_MODAL', ({ category }) => ({ category }));

export const openNormalModal = createAction('OPEN_NORMAL_MODAL', ({ type, data = {} }) => ({
	type,
	data,
}));

export const closeNormalModal = createAction(
	'CLOSE_NORMAL_MODAL',
	({ type } = { type: '' }) => (__, getState) => {
		const {
			modal: {
				normal: { list, value },
			},
		} = getState();
		if (isExist(type)) {
			const newList = list.filter(l => l !== type);
			const newValue = _.omit(value, type);
			return { list: newList, value: newValue };
		}

		return { list: [], value: {} };
	},
);

const setModalBackgroundScrollY = createAction('SET_MODAL_BACKGROUND_SCROLLY', () => {
	if (!document.body.className.includes('no-scroll')) {
		document.body.style.top = `-${window.pageYOffset}px`;
		document.body.className = classnames(document.body.className, 'no-scroll');
	}
});

const restoreModalBackgroundScrollY = createAction('RESTORE_MODAL_BACKGROUND_SCROLLY', () => {
	const classNameArray = document.body.className.split(' ');
	const newClassName = classNameArray.filter(item => item !== 'no-scroll').join(' ');
	document.body.className = newClassName;

	const matchesTop = document.body.style.top.match(/\d+/g);
	document.body.style.top = 'unset';
	if (matchesTop !== null && matchesTop.length > 0) {
		window.scrollTo(0, parseInt(matchesTop[0], 10));
	} else {
		window.scrollTo(0, 0);
	}
});

export const openModalEpic = action$ =>
	action$.pipe(
		ofType('OPEN_MODAL', 'OPEN_NORMAL_MODAL'),
		filter(action => action.payload.category !== 'toast'),
		map(() => setModalBackgroundScrollY()),
	);

export const closeModalEpic = action$ =>
	action$.pipe(
		ofType('CLOSE_MODAL', 'CLOSE_NORMAL_MODAL'),
		filter(action => action.payload.category !== 'toast'),
		map(() => restoreModalBackgroundScrollY()),
	);

export const closeModalRedirectEpic = action$ =>
	action$.pipe(
		filter(action => action.type === 'CLOSE_MODAL'),
		map(() => ({ type: 'NO_NEED_TO_CAHGNE_URL' })),
	);

const reducer = {
	modal: handleActions(
		{
			OPEN_MODAL: (state, action) => ({
				...state,
				[action.payload.category]: {
					type: action.payload.type,
					data: action.payload.data,
				},
			}),

			CLOSE_MODAL: (state, action) => ({
				...state,
				[action.payload.category]: {
					type: '',
					data: {},
				},
			}),

			OPEN_NORMAL_MODAL: (state, action) => ({
				...state,
				normal: {
					list: [...state.normal.list, action.payload.type],
					value: {
						...state.normal.value,
						[action.payload.type]: action.payload.data,
					},
				},
			}),

			CLOSE_NORMAL_MODAL: (state, action) => ({
				...state,
				normal: {
					list: action.payload.list,
					value: action.payload.value,
				},
			}),
		},
		{
			dialog: { type: '', data: {} }, // only one modal at once
			toast: { type: '', data: {} }, // only one modal at once
			normal: { list: [], value: {} }, // allow multiple modals
		},
	),
};

const selectDialog = state => state.modal.dialog;

export const useDialogModal = () =>
	useRedux(selectDialog, {
		openModal,
		closeModal,
		setModalBackgroundScrollY,
		restoreModalBackgroundScrollY,
	});

const selectToast = state => state.modal.toast;

export const useToastModal = () =>
	useRedux(selectToast, {
		openModal,
		closeModal,
		setModalBackgroundScrollY,
		restoreModalBackgroundScrollY,
	});

const selectNormalModal = state => state.modal.normal;

export const useNormalModal = () =>
	useRedux(selectNormalModal, {
		openNormalModal,
		closeNormalModal,
		setModalBackgroundScrollY,
		restoreModalBackgroundScrollY,
	});

const selectModal = state => state.modal;

export const useModal = () =>
	useRedux(selectModal, {
		openModal,
		closeModal,
		openNormalModal,
		closeNormalModal,
		setModalBackgroundScrollY,
		restoreModalBackgroundScrollY,
	});

export default { reducer };
