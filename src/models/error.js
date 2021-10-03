import { map, filter } from 'rxjs/operators';

import { openModal } from 'models/modal';

export const handleError = action$ =>
	action$.pipe(
		filter(action => action.type.includes('REJECTED')),
		map(action => {
			if (action.payload.message === 'Server Error') {
				return openModal({ category: 'dialog', type: 'serverError' });
			}

			return { type: 'NOT_HANDLE_ERROR' };
		}),
	);
