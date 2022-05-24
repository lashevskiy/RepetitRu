import { all, fork, put, select, takeLatest } from 'redux-saga/effects';
import * as API from '../../api/teachersList';
import * as teachersListFavoritePanel from '../../containers/TeachersListFavoritePanel/selectors';
import * as actions from './actions';
import { StorageGet, StorageSet } from '../../bridge';

function* init() {
    yield put(actions.fetchTeachers());
}

function* getTeachers() {
    const ids = yield select(teachersListFavoritePanel.getTeacherIds);

    return yield API.getTeachersList(ids);
}

function* getTeacherIds(param) {
    yield put(actions.fetchTeachersIds());

    const data = yield StorageGet();
    const value = data.keys[0].value;
    const dataArr = value === '' ? [] : JSON.parse(data.keys[0].value);

    yield put(actions.fetchTeachersIdsSuccess(dataArr));
}

function* fetch(action) {
    try {
        yield getTeacherIds(action.data);
        const response = yield getTeachers();

        yield put(actions.fetchTeachersSuccess(response));
    } catch (e) {
        yield put(actions.fetchTeachersFailure({ message: e.statusText }));
    }
}

function* changePage(action) {
    yield put(actions.fetchTeachers());
    try {
        const response = yield getTeachers();

        yield put(actions.fetchTeachersSuccess(response));
    } catch (e) {
        yield put(actions.fetchTeachersFailure({ message: e.statusText }));
    }
}

function* addFavorite(action) {
    try {
        const ids = yield select(teachersListFavoritePanel.getTeacherIds);
        const id = action.data;

        const unique = [...new Set([id, ...ids])];
        yield StorageSet(JSON.stringify(unique));

        yield put(actions.fetchTeachers());
    } catch (e) {}
}

function* deleteFavorite(action) {
    try {
        const ids = yield select(teachersListFavoritePanel.getTeacherIds);
        const id = action.data;
        yield StorageSet(JSON.stringify(ids.filter(item => item !== id)));

        yield put(actions.fetchTeachers());
    } catch (e) {}
}

export default function* TeachersFavoriteListSaga() {
    yield all([
        yield fork(init),
        takeLatest(actions.TYPES.FETCH_TEACHERS, fetch),
        takeLatest(actions.TYPES.CHANGE_PAGE, changePage),

        takeLatest(actions.TYPES.ADD_FAVORITE, addFavorite),
        takeLatest(actions.TYPES.DELETE_FAVORITE, deleteFavorite),
    ]);
}
