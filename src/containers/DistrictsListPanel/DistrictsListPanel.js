import { connect } from 'react-redux';
import DistrictsListPanel from '../../components/DistrictsListPanel/DistrictsListPanel';
import * as selectors from './selectors';
import { fetchData } from './actions';
import { setDistrict } from '../FilterPanel/actions';
import { withNavigation } from '../HOC/withNavigation';

const DistrictsListPanelContainer = connect(
    state => ({
        data: selectors.getData(state),
        isLoading: selectors.getIsLoading(state),
        isHasError: selectors.getIsHasError(state),
    }),
    {
        fetchData,
        setDistrict,
    }
)(DistrictsListPanel);

export default withNavigation(DistrictsListPanelContainer);
