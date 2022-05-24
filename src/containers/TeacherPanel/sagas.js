import { all, put, takeLatest } from 'redux-saga/effects';
import * as API from '../../api/teachersList';
import * as actions from './actions';

function* getData(id) {
    return yield API.getTeacherById(id);
}

function* fetch(action) {
    try {
        const response = yield getData(action.id);

        if (response === 'error') {
            yield put(actions.fetchTeacherFailure({ message: 'error' }));
        } else {
            yield put(actions.fetchTeacherSuccess(response));
        }
    } catch (e) {
        yield put(actions.fetchTeacherFailure({ message: e.statusText }));
    }
}

export default function* TeacherPanelSaga() {
    yield all([takeLatest(actions.TYPES.FETCH_TEACHER, fetch)]);
}
