import { makeActionCreator } from '../../utils/redux';

export const TYPES = {
    SET_ACTIVE_PANEL: '[NAVIGATION] SET_ACTIVE_PANEL',
    SET_ACTIVE_STORY: '[NAVIGATION] SET_ACTIVE_STORY',
    SET_ACTIVE_MODAL: '[NAVIGATION] SET_ACTIVE_MODAL',
    SET_HISTORY: '[NAVIGATION] SET_HISTORY',
    CLEAR_HISTORY: '[NAVIGATION] CLEAR_HISTORY',

    GO_TO_PAGE: '[NAVIGATION] GO_TO_PAGE',
    GO_BACK: '[NAVIGATION] GO_BACK',
    BACK: '[NAVIGATION] BACK',
};

export const setActivePanel = makeActionCreator(TYPES.SET_ACTIVE_PANEL, 'panelId', 'params');
export const setActiveStory = makeActionCreator(TYPES.SET_ACTIVE_STORY, 'storyId', 'panelId', 'params');
export const setActiveModal = makeActionCreator(TYPES.SET_ACTIVE_MODAL, 'modalId', 'params');

export const setHistory = makeActionCreator(TYPES.SET_HISTORY, 'history');
export const clearHistory = makeActionCreator(TYPES.CLEAR_HISTORY);

export const goToPage = makeActionCreator(TYPES.GO_TO_PAGE, 'panelId');
export const goBack = makeActionCreator(TYPES.GO_BACK);
export const back = makeActionCreator(TYPES.BACK);
