import { makeActionCreator } from '../../utils/redux';

const component = 'DistrictsListPanel';

export const TYPES = {
    INIT: `[${component}] INIT`,
    FETCH_DATA: `[${component}] FETCH_DATA`,
    FETCH_DATA_SUCCESS: `[${component}] FETCH_DATA_SUCCESS`,
    FETCH_DATA_FAILURE: `[${component}] FETCH_DATA_FAILURE`,
    RESET_DATA: `[${component}] RESET_DATA`,
};

export const init = makeActionCreator(TYPES.INIT, 'params');
export const fetchData = makeActionCreator(TYPES.FETCH_DATA, 'data');
export const fetchDataSuccess = makeActionCreator(TYPES.FETCH_DATA_SUCCESS, 'data');
export const fetchDataFailure = makeActionCreator(TYPES.FETCH_DATA_FAILURE, 'message');
export const resetData = makeActionCreator(TYPES.RESET_DATA);
