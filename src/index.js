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
import { ToastContainer } from 'react-toastify';

import configureStore from './store';
import history from './store/history';
import routes from './routes';
import reducers from './models/reducers';

import 'react-toastify/dist/ReactToastify.css';

const store = configureStore(createStore(reducers));

extendDayjsPlugin();

ReactDOM.render(
	<Provider store={store}>
		<ToastContainer
			position="top-right"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
		/>
		<Router history={history} routes={routes} store={store} />
	</Provider>,
	document.getElementById('content'),
);
