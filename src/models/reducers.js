import { combineReducers } from 'redux';

import routing from './routing';
import members from './member';
import blogs from './blog';
import home from './home';
import news from './news';
import service from './service';
import location from './location';
import modal from './modal';

const reducers = combineReducers({
	...routing.reducer,
	...home.reducer,
	...members.reducer,
	...blogs.reducer,
	...news.reducer,
	...location.reducer,
	...modal.reducer,
	...service.reducer,
});

export default reducers;
