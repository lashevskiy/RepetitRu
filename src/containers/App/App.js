import App from '../../components/App/App';
import { withNavigation } from '../HOC/withNavigation';
import { connect } from 'react-redux';
import { setTeacherId } from '../TeacherPanel/actions';
import { setLesson } from '../FilterPanel/actions';
import * as teachersListSelectors from '../TeachersListPanel/selectors';
import '@vkontakte/vkui/dist/vkui.css';

const AppContainer = connect(
    state => ({
        teacherIds: teachersListSelectors.getTeacherIds(state),
    }),
    {
        setTeacherId,
        setLesson,
    }
)(App);

export default withNavigation(AppContainer);
