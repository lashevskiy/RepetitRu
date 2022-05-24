import { all, fork, put, takeLatest } from 'redux-saga/effects';
import * as API from '../../api/subjects';
import * as actions from './actions';

function* init() {
    yield put(actions.fetchData());
}

function* fetch(action) {
    try {
        const response = yield API.searchSubjects(action.data);

        yield put(actions.fetchDataSuccess(response));
    } catch (e) {
        yield put(actions.fetchDataFailure({ message: e.statusText }));
    }
}

export default function* SubjectsListPanel() {
    yield all([yield fork(init), takeLatest(actions.TYPES.FETCH_DATA, fetch)]);
}
