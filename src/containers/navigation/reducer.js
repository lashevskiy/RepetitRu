import { makeReducer } from '../../utils/redux';
import * as actions from './actions';
import { VIEWS, VIEWS_ID } from '../../constants/views';

const startView = VIEWS_ID.OVERVIEW;

const initialState = {
    activePanel: VIEWS[startView].startPanel,
    history: [VIEWS[startView].startPanel],
    activeStory: startView,
    activeModal: null,
    params: {},
    paramsModal: {},
};

const reducer = makeReducer(initialState, {
    [actions.TYPES.SET_ACTIVE_PANEL]: (state, action) => {
        const { panelId, params = {} } = action;

        return {
            ...state,
            activePanel: panelId,
            params: {
                ...state.params,
                [panelId]: {
                    params,
                },
            },
        };
    },
    [actions.TYPES.SET_ACTIVE_MODAL]: (state, action) => {
        const { modalId, params } = action;

        if (modalId == null) {
            return {
                ...state,
                activeModal: null,
            };
        } else {
            return {
                ...state,
                activeModal: modalId,
                paramsModal: {
                    ...state.paramsModal,
                    [modalId]: params,
                },
            };
        }
    },
    [actions.TYPES.SET_ACTIVE_STORY]: (state, action) => {
        const { storyId, panelId, params } = action;
        const activePanel = panelId || VIEWS[storyId].startPanel;

        return {
            ...state,
            activeStory: storyId,
            activePanel,
            history: [VIEWS[storyId].startPanel],
            params: {
                ...state.params,
                [activePanel]: {
                    params,
                },
            },
        };
    },
    [actions.TYPES.SET_HISTORY]: (state, action) => {
        const { history } = action;

        return {
            ...state,
            history,
        };
    },
    [actions.TYPES.CLEAR_HISTORY]: (state, action) => {
        return {
            ...state,
            history: [],
        };
    },
});

export default reducer;
