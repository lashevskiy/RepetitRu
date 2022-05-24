import { createSelector } from 'reselect';

const getRoot = state => state.navigation;

export const getActivePanel = state => getRoot(state).activePanel;
export const getActiveStory = state => getRoot(state).activeStory;
export const getActiveModal = state => getRoot(state).activeModal;

export const getActivePanelParamsById = createSelector(
    getRoot,
    (state, panelId) => panelId,
    (root, panelId) => {
        const params = root.params[panelId];
        return params !== undefined ? params : {};
    }
);

export const getActiveModalParamsById = createSelector(
    getRoot,
    (state, modalId) => modalId,
    (root, modalId) => {
        const params = root.paramsModal[modalId];
        return params !== undefined ? params : {};
    }
);

export const getHistory = state => getRoot(state).history;
