import { connect } from 'react-redux';
import * as NavigationSelectors from './selectors';
import * as NavigationActions from './actions';

export const createNavigation = () =>
    connect(
        state => ({
            activePanel: NavigationSelectors.getActivePanel(state),
            activeStory: NavigationSelectors.getActiveStory(state),
            activeModal: NavigationSelectors.getActiveModal(state),
            activeModalParams: NavigationSelectors.getActiveModalParamsById(
                state,
                NavigationSelectors.getActiveModal(state)
            ),
            activePanelParams: NavigationSelectors.getActivePanelParamsById(
                state,
                NavigationSelectors.getActivePanel(state)
            ),
            history: NavigationSelectors.getHistory(state),
        }),
        {
            setActivePanel: NavigationActions.setActivePanel,
            setActiveStory: NavigationActions.setActiveStory,
            setHistory: NavigationActions.setHistory,
            setActiveModal: NavigationActions.setActiveModal,
            goBack: NavigationActions.goBack,
            back: NavigationActions.back,
            goToPage: NavigationActions.goToPage,
            clearHistory: NavigationActions.clearHistory,
        }
    );
