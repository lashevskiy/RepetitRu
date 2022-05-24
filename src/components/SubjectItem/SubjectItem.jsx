import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from '@vkontakte/vkui';
import { capitalizeFirstLetter } from '../../utils/text';

const SubjectItem = ({ subject, setLesson, back }) => {
    const handleClick = React.useCallback(() => {
        setLesson(subject);
        back();
    }, [subject, setLesson, back]);

    return <Cell onClick={handleClick}>{capitalizeFirstLetter(subject.name)}</Cell>;
};

SubjectItem.propTypes = {
    subjects: PropTypes.array.isRequired,
    setLesson: PropTypes.func.isRequired,
    back: PropTypes.func.isRequired,
};

export default React.memo(SubjectItem);
