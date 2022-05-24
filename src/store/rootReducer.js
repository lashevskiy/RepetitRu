import { combineReducers } from 'redux';

import TeachersListPanel from '../containers/TeachersListPanel/reducer';
import TeachersListFavoritePanel from '../containers/TeachersListFavoritePanel/reducer';
import TeacherPanel from '../containers/TeacherPanel/reducer';
import Navigation from '../containers/navigation/reducer';
import CityListPanel from '../containers/CityListPanel/reducer';
import SubjectsListPanel from '../containers/SubjectsListPanel/reducer';
import DistrictsListPanel from '../containers/DistrictsListPanel/reducer';
import FilterPanel from '../containers/FilterPanel/reducer';

export const rootReducer = combineReducers({
    navigation: Navigation,
    TeachersListPanel,
    TeachersListFavoritePanel,
    TeacherPanel,
    CityListPanel,
    DistrictsListPanel,
    SubjectsListPanel,
    FilterPanel,
});
