import { makeReducer } from '../../utils/redux';
import * as actions from './actions';

const initialState = {
    data: [],
    isLoading: false,
    isHasError: false,
};

const reducer = makeReducer(initialState, {
    [actions.TYPES.FETCH_DATA]: state => ({
        ...state,
        isLoading: true,
        data: initialState.data,
    }),
    [actions.TYPES.FETCH_DATA_SUCCESS]: (state, action) => {
        const { data } = action;
        return {
            ...state,
            data,
            isLoading: false,
            isHasError: false,
        };
    },
    [actions.TYPES.FETCH_DATA_FAILURE]: state => ({
        ...state,
        isLoading: false,
        isHasError: true,
    }),
});

export default reducer;
