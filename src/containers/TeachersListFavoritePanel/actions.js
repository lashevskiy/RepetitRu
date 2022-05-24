import { makeActionCreator } from '../../utils/redux';

const component = 'TeachersListFavoritePanel';

export const TYPES = {
    INIT: `[${component}] INIT`,
    FETCH_TEACHERS: `[${component}] FETCH_TEACHERS`,
    FETCH_TEACHERS_SUCCESS: `[${component}] FETCH_TEACHERS_SUCCESS`,
    FETCH_TEACHERS_FAILURE: `[${component}] FETCH_TEACHERS_FAILURE`,
    RESET_DATA: `[${component}] RESET_DATA`,

    FETCH_TEACHERS_IDS: `[${component}] FETCH_TEACHERS_IDS`,
    FETCH_TEACHERS_IDS_SUCCESS: `[${component}] FETCH_TEACHERS_IDS_SUCCESS`,
    FETCH_TEACHERS_IDS_FAILURE: `[${component}] FETCH_TEACHERS_IDS_FAILURE`,

    CHANGE_PAGE: `[${component}] CHANGE_PAGE`,
    ADD_FAVORITE: `[${component}] ADD_FAVORITE`,
    DELETE_FAVORITE: `[${component}] DELETE_FAVORITE`,
};

export const init = makeActionCreator(TYPES.INIT, 'params');
export const fetchTeachers = makeActionCreator(TYPES.FETCH_TEACHERS, 'data');
export const fetchTeachersSuccess = makeActionCreator(TYPES.FETCH_TEACHERS_SUCCESS, 'data');
export const fetchTeachersFailure = makeActionCreator(TYPES.FETCH_TEACHERS_FAILURE, 'message');

export const fetchTeachersIds = makeActionCreator(TYPES.FETCH_TEACHERS_IDS, 'data');
export const fetchTeachersIdsSuccess = makeActionCreator(TYPES.FETCH_TEACHERS_IDS_SUCCESS, 'data');
export const fetchTeachersIdsFailure = makeActionCreator(TYPES.FETCH_TEACHERS_IDS_FAILURE, 'message');

export const resetData = makeActionCreator(TYPES.RESET_DATA);

export const changePage = makeActionCreator(TYPES.CHANGE_PAGE, 'page');

export const addFavorite = makeActionCreator(TYPES.ADD_FAVORITE, 'data');
export const deleteFavorite = makeActionCreator(TYPES.DELETE_FAVORITE, 'data');
