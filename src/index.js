import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// A modern alternative to CSS resets
import 'normalize.css';
// Global css setting
import './global.css';

import Router from 'layouts/Router';
import { createStore } from 'redux';

import { extendDayjsPlugin } from 'util/external';

import configureStore from './store';
import history from './store/history';
import routes from './routes';
import reducers from './models/reducers';

const store = configureStore(createStore(reducers));

extendDayjsPlugin();

ReactDOM.render(
	<Provider store={store}>
		<Router history={history} routes={routes} store={store} />
	</Provider>,
	document.getElementById('content'),
);
