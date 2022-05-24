import { connect } from 'react-redux';
import { getFilter } from '../FilterPanel/selectors';
import TeacherCardItem from '../../components/TeacherCardItem/TeacherCardItem';
import { withNavigation } from '../HOC/withNavigation';

const TeacherCardItemContainer = connect(state => ({
    filter: getFilter(state),
}))(TeacherCardItem);

export default withNavigation(TeacherCardItemContainer);
