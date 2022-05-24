import { makeReducer } from '../../utils/redux';
import * as actions from './actions';

const initialState = {
    data: {},
    isLoading: false,
    isHasError: false,
    teacherId: null,
};

const reducer = makeReducer(initialState, {
    [actions.TYPES.FETCH_TEACHER]: state => ({
        ...state,
        isLoading: true,
        data: initialState.data,
    }),
    [actions.TYPES.FETCH_TEACHER_SUCCESS]: (state, action) => {
        const { data } = action;
        return {
            ...state,
            data,
            isLoading: false,
            isHasError: false,
        };
    },
    [actions.TYPES.FETCH_TEACHER_FAILURE]: state => ({
        ...state,
        isLoading: false,
        isHasError: true,
    }),
    [actions.TYPES.RESET_DATA]: state => ({
        ...state,
        ...initialState,
    }),
    [actions.TYPES.SET_TEACHER_ID]: (state, action) => ({
        ...state,
        teacherId: action.id,
    }),
});

export default reducer;
