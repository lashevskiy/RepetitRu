import { makeReducer } from '../../utils/redux';
import * as actions from './actions';

const initialState = {
    data: [],
    ids: [],
    limit: 10,
    offset: 0,
    page: 0,
    pages: 0,
    isLoading: false,
    isHasError: false,
};

const reducer = makeReducer(initialState, {
    [actions.TYPES.FETCH_TEACHERS]: state => ({
        ...state,
        isLoading: true,
        data: initialState.data,
    }),
    [actions.TYPES.FETCH_TEACHERS_SUCCESS]: (state, action) => {
        const { data } = action;
        const total = state.ids.length;
        const limit = 10;
        const pages = total && limit ? Math.ceil(total / limit) : 0;

        return {
            ...state,
            data,
            pages,
            isLoading: false,
            isHasError: false,
        };
    },
    [actions.TYPES.FETCH_TEACHERS_FAILURE]: state => ({
        ...state,
        isLoading: false,
        isHasError: true,
    }),
    [actions.TYPES.RESET_DATA]: (state, action) => ({
        ...state,
        ...initialState,
    }),

    [actions.TYPES.FETCH_TEACHERS_IDS]: state => ({
        ...state,
        isLoading: true,
        ids: initialState.ids,
    }),
    [actions.TYPES.FETCH_TEACHERS_IDS_SUCCESS]: (state, action) => {
        const { data } = action;
        return {
            ...state,
            ids: data,
            isHasError: false,
        };
    },
    [actions.TYPES.FETCH_TEACHERS_IDS_FAILURE]: state => ({
        ...state,
        isLoading: false,
        isHasError: true,
    }),
    [actions.TYPES.CHANGE_PAGE]: (state, action) => {
        const { page } = action;
        return {
            ...state,
            page,
            offset: page * 10,
        };
    },
});

export default reducer;
