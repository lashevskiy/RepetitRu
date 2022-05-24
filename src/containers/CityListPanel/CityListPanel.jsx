import { connect } from 'react-redux';
import CityListPanel from '../../components/CityListPanel/CityListPanel';
import * as areasListSelectors from './selectors';
import { fetchData } from './actions';
import { setCity } from '../FilterPanel/actions';
import { withNavigation } from '../HOC/withNavigation';

const CityListPanelContainer = connect(
    state => ({
        data: areasListSelectors.getData(state),
        isLoading: areasListSelectors.getIsLoading(state),
        isHasError: areasListSelectors.getIsHasError(state),
    }),
    {
        fetchData,
        setCity,
    }
)(CityListPanel);

export default withNavigation(CityListPanelContainer);
