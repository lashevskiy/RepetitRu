import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@vkontakte/vkui';

const FilterAge = ({ changeFilterAge, filter }) => {
    const handleChangeAge30 = React.useCallback(
        () => changeFilterAge('age30', !filter.age30),
        [filter, changeFilterAge]
    );
    const handleChangeAge50 = React.useCallback(
        () => changeFilterAge('age50', !filter.age50),
        [filter, changeFilterAge]
    );
    const handleChangeAge100 = React.useCallback(
        () => changeFilterAge('age100', !filter.age100),
        [filter, changeFilterAge]
    );

    return (
        <>
            <Checkbox disabled={false} checked={filter?.age30 === true} onChange={handleChangeAge30}>
                До 30 лет
            </Checkbox>
            <Checkbox disabled={false} checked={filter?.age50 === true} onChange={handleChangeAge50}>
                30-50 лет
            </Checkbox>
            <Checkbox disabled={false} checked={filter?.age100 === true} onChange={handleChangeAge100}>
                Старше 50 лет
            </Checkbox>
        </>
    );
};

FilterAge.propTypes = {
    filter: PropTypes.object.isRequired,
    changeFilterAge: PropTypes.func.isRequired,
};

export default React.memo(FilterAge);
