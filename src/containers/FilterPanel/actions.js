import { makeActionCreator } from '../../utils/redux';

const component = 'FilterPanel';

export const TYPES = {
    INIT: `[${component}] INIT`,
    FETCH_TEACHER: `[${component}] FETCH_TEACHER`,
    FETCH_TEACHER_SUCCESS: `[${component}] FETCH_TEACHER_SUCCESS`,
    FETCH_TEACHER_FAILURE: `[${component}] FETCH_TEACHER_FAILURE`,
    RESET_DATA: `[${component}] RESET_DATA`,
    SET_TEACHER_ID: `[${component}] SET_TEACHER_ID`,
    CHANGE_FILTER: `[${component}] CHANGE_FILTER`,
    CHANGE_FILTER_AGE: `[${component}] CHANGE_FILTER_AGE`,
    CHANGE_FILTER_EXPERIENCE: `[${component}] CHANGE_FILTER_EXPERIENCE`,
    RESET_FILTER: `[${component}] RESET_FILTER`,
    RESET_FILTER_TMP: `[${component}] RESET_FILTER_TMP`,
    APPLY_FILTER: `[${component}] APPLY_FILTER`,

    SET_CITY: `[${component}] SET_CITY`,
    SET_DISTRICT: `[${component}] SET_DISTRICT`,
    SET_LESSON: `[${component}] SET_LESSON`,
};

export const init = makeActionCreator(TYPES.INIT, 'params');
export const fetchTeacher = makeActionCreator(TYPES.FETCH_TEACHER, 'id');
export const fetchTeacherSuccess = makeActionCreator(TYPES.FETCH_TEACHER_SUCCESS, 'data');
export const fetchTeacherFailure = makeActionCreator(TYPES.FETCH_TEACHER_FAILURE, 'message');
export const resetData = makeActionCreator(TYPES.RESET_DATA);

export const setTeacherId = makeActionCreator(TYPES.SET_TEACHER_ID, 'id');

export const changeFilter = makeActionCreator(TYPES.CHANGE_FILTER, 'paramPath', 'value');
export const changeFilterAge = makeActionCreator(TYPES.CHANGE_FILTER_AGE, 'paramPath', 'value');
export const changeFilterExperience = makeActionCreator(TYPES.CHANGE_FILTER_EXPERIENCE, 'paramPath', 'value');
export const resetFilter = makeActionCreator(TYPES.RESET_FILTER);
export const resetFilterTmp = makeActionCreator(TYPES.RESET_FILTER_TMP);
export const applyFilter = makeActionCreator(TYPES.APPLY_FILTER);

export const setCity = makeActionCreator(TYPES.SET_CITY, 'id');
export const setDistrict = makeActionCreator(TYPES.SET_DISTRICT, 'id');
export const setLesson = makeActionCreator(TYPES.SET_LESSON, 'id');
