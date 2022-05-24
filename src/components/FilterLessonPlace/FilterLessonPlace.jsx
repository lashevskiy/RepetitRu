import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from '@vkontakte/vkui';

const FilterLessonPlace = ({ changeFilter, filter }) => {
    const handleChange = React.useCallback(
        v => changeFilter('filter.lessonPlace', v.target.value),
        [changeFilter]
    );

    return (
        <>
            <Radio name="lessonPlace" value="0" checked={filter?.lessonPlace === '0'} onChange={handleChange}>
                Любой
            </Radio>
            <Radio name="lessonPlace" value="3" checked={filter?.lessonPlace === '3'} onChange={handleChange}>
                У репетитора или ученика
            </Radio>
            <Radio name="lessonPlace" value="2" checked={filter?.lessonPlace === '2'} onChange={handleChange}>
                У репетитора
            </Radio>
            <Radio name="lessonPlace" value="1" checked={filter?.lessonPlace === '1'} onChange={handleChange}>
                У ученика
            </Radio>
            <Radio name="lessonPlace" value="4" checked={filter?.lessonPlace === '4'} onChange={handleChange}>
                Дистанционно
            </Radio>
        </>
    );
};

FilterLessonPlace.propTypes = {
    filter: PropTypes.object.isRequired,
    changeFilter: PropTypes.func.isRequired,
};

export default React.memo(FilterLessonPlace);
