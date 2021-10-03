import { combineEpics } from 'redux-observable';

import { closeModalEpic, openModalEpic, closeModalRedirectEpic } from './modal';
import { handleError } from './error';

export default combineEpics(closeModalEpic, openModalEpic, closeModalRedirectEpic, handleError);
