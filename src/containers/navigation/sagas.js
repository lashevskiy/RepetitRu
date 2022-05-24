import { all, put, select, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import { setActivePanel, setHistory } from './actions';
import { getActiveStory, getHistory } from './selectors';
import bridge from '@vkontakte/vk-bridge';
import { VIEWS } from '../../constants/views';

function* goToPage({ panelId }) {
    const history = yield select(getHistory);

    yield put(setActivePanel(panelId));
    yield put(setHistory([...history, panelId]));

    window.history.pushState({ panel: panelId }, panelId);
}

function* goBack() {
    const history = yield select(getHistory);
    const activeStory = yield select(getActiveStory);
    if (history.length > 1) {
        history.pop();
        // yield put(setHistory(history));
        const activePanel = history[history.length - 1];
        if (activePanel === VIEWS[activeStory].startPanel) {
            bridge.send('VKWebAppDisableSwipeBack');
        }

        yield put(setActivePanel(activePanel));
        yield put(setHistory(history));
    }
}

function* back() {
    window.history.back();
}

function* setActiveStory({ storyId, panelId, params }) {
    window.history.pushState({ panel: panelId }, panelId); // Создаём новую запись в истории браузера
}

function* setActiveModal({ modalId }) {
    // if(modalId) {
    //     const history = yield select(getHistory);
    //     yield put(setHistory([...history, modalId])); // Добавляем панель в историю
    //     window.history.pushState({ modal: modalId }, modalId); // Создаём новую запись в истории браузера
    // } else {
    //     // const history = yield select(getHistory);
    //     // if(history.length > 1) {
    //     //     history.pop();
    //     //     yield put(setHistory(history));
    //         window.history.back();
    //     // }
    // }
}

export default function* NavigationSaga() {
    yield all([
        takeLatest(actions.TYPES.GO_TO_PAGE, goToPage),
        takeLatest(actions.TYPES.GO_BACK, goBack),
        takeLatest(actions.TYPES.BACK, back),
        takeLatest(actions.TYPES.SET_ACTIVE_STORY, setActiveStory),
        takeLatest(actions.TYPES.SET_ACTIVE_MODAL, setActiveModal),
    ]);
}
