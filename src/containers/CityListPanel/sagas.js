import { all, fork, put, takeLatest } from 'redux-saga/effects';
import * as API from '../../api/areasList';
import * as actions from './actions';

function* init() {
    yield put(actions.fetchData());
}

function* fetch(action) {
    try {
        const response = yield API.getAreasList();

        yield put(actions.fetchDataSuccess(response));
    } catch (e) {
        yield put(actions.fetchDataFailure({ message: e.statusText }));
    }
}

export default function* CityListPanelSaga() {
    yield all([yield fork(init), takeLatest(actions.TYPES.FETCH_DATA, fetch)]);
}
