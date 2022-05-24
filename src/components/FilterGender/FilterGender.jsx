import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@vkontakte/vkui';

const FilterGender = ({ changeFilter, filter }) => {
    const handleChangeMale = React.useCallback(
        () => changeFilter('filter.sex.male', !filter.sex.male),
        [filter, changeFilter]
    );

    const handleChangeFemale = React.useCallback(
        () => changeFilter('filter.sex.female', !filter.sex.female),
        [filter, changeFilter]
    );

    return (
        <>
            <Checkbox disabled={false} checked={filter?.sex?.male === true} onChange={handleChangeMale}>
                Мужчина
            </Checkbox>
            <Checkbox disabled={false} checked={filter?.sex?.female === true} onChange={handleChangeFemale}>
                Женщина
            </Checkbox>
        </>
    );
};

FilterGender.propTypes = {
    filter: PropTypes.object.isRequired,
    changeFilter: PropTypes.func.isRequired,
};

export default React.memo(FilterGender);
