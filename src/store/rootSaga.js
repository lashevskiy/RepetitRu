import { all } from 'redux-saga/effects';
import TeachersListPanel from '../containers/TeachersListPanel/sagas';
import TeachersListFavoritePanel from '../containers/TeachersListFavoritePanel/sagas';
import TeacherPanel from '../containers/TeacherPanel/sagas';
import CityListPanel from '../containers/CityListPanel/sagas';
import SubjectsListPanel from '../containers/SubjectsListPanel/sagas';
import DistrictsListPanel from '../containers/DistrictsListPanel/sagas';
import FilterPanel from '../containers/FilterPanel/sagas';
import NavigationSaga from '../containers/navigation/sagas';

export default function* rootSaga() {
    yield all([
        ...TeachersListPanel(),
        ...TeachersListFavoritePanel(),
        ...TeacherPanel(),
        ...CityListPanel(),
        ...SubjectsListPanel(),
        ...DistrictsListPanel(),
        ...FilterPanel(),
        ...NavigationSaga(),
    ]);
}
