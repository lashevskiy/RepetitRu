import React from 'react';
import PropTypes from 'prop-types';
import { Icon28CheckCircleFill } from '@vkontakte/icons';
import { Cell } from '@vkontakte/vkui';
import { withNavigation } from '../../containers/HOC/withNavigation';
import { VIEWS_ID } from '../../constants/views';

const LessonCard = ({ item, setLesson, resetFilter, ...navigationParams }) => {
    const handleClick = React.useCallback(() => {
        resetFilter();
        setLesson({ id: item.id, name: item.name });
        navigationParams.setActiveStory(VIEWS_ID.REPETITORS);
    }, [resetFilter, setLesson, navigationParams, item]);

    return (
        <Cell expandable={false} before={<Icon28CheckCircleFill width={20} height={20} />} onClick={handleClick}>
            {item.name}
        </Cell>
    );
};

LessonCard.propTypes = {
    item: PropTypes.object.isRequired,
    setLesson: PropTypes.func.isRequired,
    resetFilter: PropTypes.func.isRequired,
};

export default withNavigation(LessonCard);
