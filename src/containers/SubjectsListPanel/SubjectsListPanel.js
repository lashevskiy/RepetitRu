import { connect } from 'react-redux';
import SubjectsListPanel from '../../components/SubjectsListPanel/SubjectsListPanel';
import * as selectors from './selectors';
import { fetchData } from './actions';
import { setLesson } from '../FilterPanel/actions';
import { withNavigation } from '../HOC/withNavigation';

const SubjectsListPanelContainer = connect(
    state => ({
        data: selectors.getData(state),
        isLoading: selectors.getIsLoading(state),
        isHasError: selectors.getIsHasError(state),
    }),
    {
        fetchData,
        setLesson,
    }
)(SubjectsListPanel);

export default withNavigation(SubjectsListPanelContainer);
