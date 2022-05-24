import { all, put, takeLatest } from 'redux-saga/effects';
import * as API from '../../api/teachersList';
import * as actions from './actions';
import * as actionsDistrictsListPanel from './../DistrictsListPanel/actions';
import { fetchTeachers } from '../TeachersListPanel/actions';

function* getData(id) {
    return yield API.getTeacherById(id);
}

function* fetch(action) {
    try {
        const response = yield getData(action.id);

        yield put(actions.fetchTeacherSuccess(response));
    } catch (e) {
        yield put(actions.fetchTeacherFailure({ message: e.statusText }));
    }
}

function* setCity() {
    yield put(actions.setDistrict(null));
    yield put(actionsDistrictsListPanel.resetData());

    yield put(fetchTeachers());
}

function* setLesson() {
    yield put(fetchTeachers());
}

function* applyFilter() {
    yield put(fetchTeachers());
}

export default function* FilterPanelSaga() {
    yield all([
        takeLatest(actions.TYPES.FETCH_TEACHER, fetch),
        takeLatest(actions.TYPES.SET_CITY, setCity),
        takeLatest(actions.TYPES.SET_LESSON, setLesson),
        takeLatest(actions.TYPES.APPLY_FILTER, applyFilter),
    ]);
}
