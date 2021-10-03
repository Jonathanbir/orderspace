import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import objectSupport from 'dayjs/plugin/objectSupport';

export const extendDayjsPlugin = () => {
	dayjs.extend(customParseFormat);
	dayjs.extend(objectSupport);
};
