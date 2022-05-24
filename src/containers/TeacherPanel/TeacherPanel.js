import { connect } from 'react-redux';
import TeacherPanel from '../../components/TeacherPanel/TeacherPanel';
import * as teachersListSelectors from './../TeachersListPanel/selectors';
import * as teacherSelectors from './selectors';
import * as teachersListFavoritePanelSelectors from '../../containers/TeachersListFavoritePanel/selectors';
import { addFavorite, deleteFavorite } from '../TeachersListFavoritePanel/actions';
import { fetchTeacher, resetData } from './actions';
import { withNavigation } from '../HOC/withNavigation';

const TeacherPanelContainer = connect(
    state => ({
        teacherId: teacherSelectors.getTeacherId(state),
        teacher: teacherSelectors.getData(state),
        teacherFull: teachersListSelectors.getFullTeacherById(state, teacherSelectors.getTeacherId(state)),
        isLoading: teacherSelectors.getIsLoading(state),
        isHasError: teacherSelectors.getIsHasError(state),
        isFavoriteTeacher: teachersListFavoritePanelSelectors.isFavoriteTeacher(
            state,
            teacherSelectors.getTeacherId(state)
        ),
        favoriteTeachers: teachersListFavoritePanelSelectors.getData(state),
    }),
    {
        fetchTeacher,
        resetData,
        addFavorite,
        deleteFavorite,
    }
)(TeacherPanel);

export default withNavigation(TeacherPanelContainer);
