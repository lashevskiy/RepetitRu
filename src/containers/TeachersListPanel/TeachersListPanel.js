import { connect } from 'react-redux';
import TeachersListPanel from '../../components/TeachersListPanel/TeachersListPanel';
import * as teachersListSelectors from './selectors';
import * as filterPanelSelectors from '../../containers/FilterPanel/selectors';
import { fetchTeachers, resetData } from './actions';
import { setTeacherId } from '../TeacherPanel/actions';
import { withNavigation } from '../HOC/withNavigation';

const TeachersListPanelContainer = connect(
    state => ({
        teachers: teachersListSelectors.getData(state),
        isLoading: teachersListSelectors.getIsLoading(state),
        isHasError: teachersListSelectors.getIsHasError(state),
        teacherIds: teachersListSelectors.getTeacherIds(state),
        filter: filterPanelSelectors.getFilter(state),
    }),
    {
        fetchTeachers,
        resetData,
        setTeacherId,
    }
)(TeachersListPanel);

export default withNavigation(TeachersListPanelContainer);
