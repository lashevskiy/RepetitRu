import React, { useState } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { ConfigProvider, Epic, ScreenSpinner, Tabbar, View } from '@vkontakte/vkui';
import {
    Icon28FavoriteOutline,
    Icon28LightbulbCircleFillYellow,
    Icon28NewsfeedOutline,
    Icon28UsersOutline,
} from '@vkontakte/icons';
import CityListPanel from '../../containers/CityListPanel/CityListPanel';
import SubjectsListPanel from '../../containers/SubjectsListPanel/SubjectsListPanel';
import DistrictsListPanel from '../../containers/DistrictsListPanel/DistrictsListPanel';
import TeachersListPanel from '../../containers/TeachersListPanel/TeachersListPanel';
import TeachersListFavoritePanel from '../../containers/TeachersListFavoritePanel/TeachersListFavoritePanel';
import TeacherPanel from '../../containers/TeacherPanel/TeacherPanel';
import FilterPanel from '../../containers/FilterPanel/FilterPanel';
import OverviewPanel from '../../containers/OverviewPanel/OverviewPanel';
import OrderPanel from '../../components/OrderPanel/OrderPanel';
import TabbarItemWrapper from '../TabbarItemWrapper/TabbarItemWrapper';
import Modals from '../../components/Modals/Modals';
import { VIEWS_ID } from '../../constants/views';
import { PANELS_ID } from '../../constants/panels';
import { isApp, isDesktop } from '../../utils';
import { GROUP_ID } from '../../constants';
import '@vkontakte/vkui/dist/vkui.css';

const getLocationHash = () => {
    return window.location.hash.replace('#', '').split('=');
};

const App = ({ teacherIds, setTeacherId, setLesson, scheme, ...navigationParams }) => {
    const { history, activePanel, activeStory, setActiveStory, setActiveModal } = navigationParams;
    const [user, setUser] = useState(null);
    const [group, setGroup] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

    const goBack = React.useCallback(() => {
        setActiveModal(null);
        navigationParams.goBack();
    }, [setActiveModal, navigationParams]);

    const handleOpenAppByLink = React.useCallback(() => {
        const hash = getLocationHash();
        if (hash[0] === 'repetitor') {
            setTeacherId(hash[1]);
            setActiveStory(VIEWS_ID.REPETITORS);
            navigationParams.goToPage(PANELS_ID.TeacherPanel);
        }
    }, [setTeacherId, setActiveStory, navigationParams]);

    async function fetchData() {
        const user = await bridge.send('VKWebAppGetUserInfo');

        setUser(user);
        setPopout(null);
    }

    async function fetchGroup() {
        if (!isDesktop()) {
            await bridge.send('VKWebAppGetGroupInfo', { group_id: GROUP_ID }).then(data => {
                setGroup(data.result);
            });
        } else {
            const group = await bridge.send('VKWebAppGetGroupInfo', { group_id: GROUP_ID });
            setGroup(group);
        }

        setPopout(null);
    }

    React.useEffect(() => {
        fetchData();
        fetchGroup();

        handleOpenAppByLink();

        window.addEventListener('popstate', () => goBack());
    }, [handleOpenAppByLink, goBack]);

    const modal = <Modals user={user} />;

    return (
        <ConfigProvider isWebView={isApp() ? true : bridge.isWebView()} scheme={scheme}>
            <Epic
                activeStory={activeStory}
                tabbar={
                    <Tabbar>
                        <TabbarItemWrapper
                            viewId={VIEWS_ID.OVERVIEW}
                            setActiveStory={setActiveStory}
                            activeStory={activeStory}
                        >
                            <Icon28NewsfeedOutline />
                        </TabbarItemWrapper>
                        <TabbarItemWrapper
                            viewId={VIEWS_ID.REPETITORS}
                            setActiveStory={setActiveStory}
                            activeStory={activeStory}
                            label={isApp() ? (teacherIds?.length > 0 ? teacherIds?.length : null) : null}
                        >
                            <Icon28UsersOutline />
                        </TabbarItemWrapper>
                        {isApp() ? (
                            <TabbarItemWrapper
                                viewId={VIEWS_ID.ORDER}
                                setActiveStory={setActiveStory}
                                activeStory={activeStory}
                            >
                                <Icon28LightbulbCircleFillYellow />
                            </TabbarItemWrapper>
                        ) : (
                            <TabbarItemWrapper
                                viewId={VIEWS_ID.FAVORITE}
                                setActiveStory={setActiveStory}
                                activeStory={activeStory}
                            >
                                <Icon28FavoriteOutline />
                            </TabbarItemWrapper>
                        )}
                    </Tabbar>
                }
            >
                <View
                    id={VIEWS_ID.OVERVIEW}
                    activePanel={activePanel}
                    popout={isApp() ? null : popout}
                    onSwipeBack={goBack}
                    history={history}
                    modal={modal}
                >
                    <OverviewPanel id={PANELS_ID.OVERVIEW} group={group} user={user} />
                </View>
                <View
                    id={VIEWS_ID.REPETITORS}
                    activePanel={activePanel}
                    onSwipeBack={goBack}
                    history={history}
                    modal={modal}
                >
                    <TeachersListPanel id={PANELS_ID.TeachersListPanel} />
                    <TeacherPanel id={PANELS_ID.TeacherPanel} user={user} />
                    <FilterPanel id={PANELS_ID.FilterPanel} />
                    <DistrictsListPanel id={PANELS_ID.DistrictsListPanel} />
                    <SubjectsListPanel id={PANELS_ID.SubjectsListPanel} />
                    <CityListPanel id={PANELS_ID.CityListPanel} />
                </View>
                <View
                    id={VIEWS_ID.FAVORITE}
                    activePanel={activePanel}
                    onSwipeBack={goBack}
                    history={history}
                    modal={modal}
                >
                    <TeachersListFavoritePanel id={PANELS_ID.FavoritePanel} />
                    <TeacherPanel id={PANELS_ID.TeacherPanel} />
                </View>
                <View
                    id={VIEWS_ID.ORDER}
                    activePanel={activePanel}
                    onSwipeBack={goBack}
                    history={history}
                    modal={modal}
                >
                    <OrderPanel id={PANELS_ID.OrderPanel} setLesson={setLesson} user={user} />
                </View>
            </Epic>
        </ConfigProvider>
    );
};

export default App;
