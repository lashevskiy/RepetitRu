import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@vkontakte/vkui';

const FilterExperience = ({ changeFilterExperience, filter }) => {
    const handleChangeExperience1 = React.useCallback(
        () => changeFilterExperience('experience1', !filter.experience1),
        [filter, changeFilterExperience]
    );

    const handleChangeExperience5 = React.useCallback(
        () => changeFilterExperience('experience5', !filter.experience5),
        [filter, changeFilterExperience]
    );

    const handleChangeExperience10 = React.useCallback(
        () => changeFilterExperience('experience10', !filter.experience10),
        [filter, changeFilterExperience]
    );

    const handleChangeExperience100 = React.useCallback(
        () => changeFilterExperience('experience100', !filter.experience100),
        [filter, changeFilterExperience]
    );

    return (
        <>
            <Checkbox disabled={false} checked={filter?.experience1 === true} onChange={handleChangeExperience1}>
                До года
            </Checkbox>
            <Checkbox disabled={false} checked={filter?.experience5 === true} onChange={handleChangeExperience5}>
                1-5 лет
            </Checkbox>
            <Checkbox disabled={false} checked={filter?.experience10 === true} onChange={handleChangeExperience10}>
                5-10 лет
            </Checkbox>
            <Checkbox disabled={false} checked={filter?.experience100 === true} onChange={handleChangeExperience100}>
                Больше 10 лет
            </Checkbox>
        </>
    );
};

FilterExperience.propTypes = {
    filter: PropTypes.object.isRequired,
    changeFilterExperience: PropTypes.func.isRequired,
};

export default React.memo(FilterExperience);
