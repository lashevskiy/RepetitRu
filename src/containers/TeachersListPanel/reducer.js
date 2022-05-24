import { makeReducer } from '../../utils/redux';
import * as actions from './actions';
import * as actionsFilterPanel from './../FilterPanel/actions';

const initialState = {
    dataFull: [],
    isLoadingFull: false,
    isHasErrorFull: false,

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
    // TODO при применении фильтра необходимо сбрасывать список репеттиторов, а главное страницу
    // TODO наверное, стоит вынести все эти штуки в фильтр, а может быть и нет
    [actionsFilterPanel.TYPES.APPLY_FILTER]: (state, action) => ({
        ...state,
        ...initialState,
    }),

    [actions.TYPES.FETCH_TEACHERS]: state => ({
        ...state,
        isLoading: true,
        data: initialState.data,
    }),
    [actions.TYPES.FETCH_TEACHERS_SUCCESS]: (state, action) => {
        const { data } = action;
        //TODO
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
    [actions.TYPES.RESET_DATA]: state => ({
        ...state,
        ...initialState,
    }),

    [actions.TYPES.FETCH_TEACHERS_FULL]: state => ({
        ...state,
        isLoadingFull: true,
        dataFull: initialState.data,
    }),
    [actions.TYPES.FETCH_TEACHERS_FULL_SUCCESS]: (state, action) => {
        const { data } = action;

        return {
            ...state,
            dataFull: data,
            isLoadingFull: false,
            isHasErrorFull: false,
        };
    },
    [actions.TYPES.FETCH_TEACHERS_FULL_FAILURE]: state => ({
        ...state,
        isLoadingFull: false,
        isHasErrorFull: true,
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
            data: [],
            isLoading: true,
            page,
            offset: page * 10,
        };
    },
});

export default reducer;
