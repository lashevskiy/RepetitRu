import { connect } from 'react-redux';
import TeachersListFavoritePanel from '../../components/TeachersListFavoritePanel/TeachersListFavoritePanel';
import * as selectors from './selectors';
import { fetchTeachers, resetData } from './actions';
import { setTeacherId } from '../TeacherPanel/actions';

const TeachersListFavoritePanelContainer = connect(
    state => ({
        teachers: selectors.getData(state),
        isLoading: selectors.getIsLoading(state),
        isHasError: selectors.getIsHasError(state),
    }),
    {
        fetchTeachers,
        resetData,
        setTeacherId,
    }
)(TeachersListFavoritePanel);

export default TeachersListFavoritePanelContainer;
