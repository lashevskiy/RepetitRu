import { connect } from 'react-redux';
import TeachersListPagination from '../../components/TeachersListPagination/TeachersListPagination';
import * as teachersListSelectors from './selectors';
import { changePage } from './actions';

const TeachersListPaginationContainer = connect(
    state => ({
        teachers: teachersListSelectors.getData(state),
        total: teachersListSelectors.getTotal(state),
        limit: teachersListSelectors.getLimit(state),
        offset: teachersListSelectors.getOffset(state),
        pages: teachersListSelectors.getPages(state),
        page: teachersListSelectors.getPage(state),
    }),
    {
        changePage,
    }
)(TeachersListPagination);

export default TeachersListPaginationContainer;
