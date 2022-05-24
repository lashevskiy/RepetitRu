import { connect } from 'react-redux';
import * as selectors from './selectors';
import {
    applyFilter,
    changeFilter,
    changeFilterAge,
    changeFilterExperience,
    resetData,
    resetFilter,
    setCity,
    setDistrict,
    setLesson,
} from './actions';
import { changePage, fetchTeachers } from '../TeachersListPanel/actions';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import { withNavigation } from '../HOC/withNavigation';

const FilterPanelContainer = connect(
    state => ({
        filter: selectors.getFilter(state),
        filterTmp: selectors.getFilterTmp(state),
    }),
    {
        resetData,
        changeFilter,
        changeFilterAge,
        changeFilterExperience,
        resetFilter,
        fetchTeachers,
        applyFilter,
        setLesson,
        setDistrict,
        setCity,
        changePage,
    }
)(FilterPanel);

export default withNavigation(FilterPanelContainer);
