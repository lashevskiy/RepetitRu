import { all, fork, put, takeLatest, select } from 'redux-saga/effects';
import * as API from '../../api/districts';
import * as actions from './actions';
import { getFilter } from '../FilterPanel/selectors';

function* init() {
    yield put(actions.fetchData());
}

function* getData(areaId) {
    return yield API.getDistricts(areaId);
}

function* fetch(action) {
    try {
        const filter = yield select(getFilter);
        const response = yield getData(filter.city.id);

        yield put(actions.fetchDataSuccess(response));
    } catch (e) {
        yield put(actions.fetchDataFailure({ message: e.statusText }));
    }
}

export default function* DistrictsListPanelSaga() {
    yield all([yield fork(init), takeLatest(actions.TYPES.FETCH_DATA, fetch)]);
}
