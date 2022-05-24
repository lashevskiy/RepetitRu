import { makeActionCreator } from '../../utils/redux';

const component = 'TeacherPanel';

export const TYPES = {
    INIT: `[${component}] INIT`,
    FETCH_TEACHER: `[${component}] FETCH_TEACHER`,
    FETCH_TEACHER_SUCCESS: `[${component}] FETCH_TEACHER_SUCCESS`,
    FETCH_TEACHER_FAILURE: `[${component}] FETCH_TEACHER_FAILURE`,
    RESET_DATA: `[${component}] RESET_DATA`,
    SET_TEACHER_ID: `[${component}] SET_TEACHER_ID`,
};

export const init = makeActionCreator(TYPES.INIT, 'params');
export const fetchTeacher = makeActionCreator(TYPES.FETCH_TEACHER, 'id');
export const fetchTeacherSuccess = makeActionCreator(TYPES.FETCH_TEACHER_SUCCESS, 'data');
export const fetchTeacherFailure = makeActionCreator(TYPES.FETCH_TEACHER_FAILURE, 'message');
export const resetData = makeActionCreator(TYPES.RESET_DATA);

export const setTeacherId = makeActionCreator(TYPES.SET_TEACHER_ID, 'id');
