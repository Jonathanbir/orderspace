import { combineReducers } from 'redux';

import routing from './routing';
import modal from './modal';

const clothesReducer = () => {
	return [
		{ title: 'Summer T-shirt', price: '2000' },
		{ title: 'Fall T-shirt', price: '2000' },
		{ title: 'Spring T-shirt', price: '2000' },
		{ title: 'Winter T-shirt', price: '2000' },
	];
};

const selectedClothesReducer = (selectedClothes = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedClothes;
};

const reducers = combineReducers({
	clothes: clothesReducer,
	selectedClothes: selectedClothesReducer,
	...routing.reducer,
	...modal.reducer,
});

export default reducers;
