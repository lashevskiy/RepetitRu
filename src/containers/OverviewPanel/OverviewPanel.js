import { connect } from 'react-redux';
import { resetFilter, setLesson } from '../FilterPanel/actions';
import OverviewPanel from '../../components/OverviewPanel/OverviewPanel';

const OverviewPanelContainer = connect(null, {
    setLesson,
    resetFilter,
})(OverviewPanel);

export default OverviewPanelContainer;
