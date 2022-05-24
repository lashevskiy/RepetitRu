import React from 'react';
import PropTypes from 'prop-types';
import { TabbarItem } from '@vkontakte/vkui';
import { VIEWS } from '../../constants/views';

const TabbarItemWrapper = ({ viewId, activeStory, setActiveStory, label, children }) => {
    const onStoryChange = React.useCallback(
        e => {
            setActiveStory(viewId, VIEWS[viewId].startPanel);
            window.scroll(0, 0);
        },
        [setActiveStory, viewId]
    );

    return (
        <TabbarItem onClick={onStoryChange} selected={activeStory === viewId} text={VIEWS[viewId].text} label={label}>
            {children}
        </TabbarItem>
    );
};

TabbarItemWrapper.propTypes = {
    viewId: PropTypes.string.isRequired,
    activeStory: PropTypes.string.isRequired,
    setActiveStory: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default React.memo(TabbarItemWrapper);
