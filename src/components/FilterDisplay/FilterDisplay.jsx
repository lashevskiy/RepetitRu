import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@vkontakte/vkui';

const FilterDisplay = ({ changeFilter, filter }) => {
    const handleChangeIsPhotoOnly = React.useCallback(
        () => changeFilter('filter.isPhotoOnly', !filter.isPhotoOnly),
        [filter, changeFilter]
    );

    const handleChangeWithReviews = React.useCallback(
        () => changeFilter('filter.withReviews', !filter.withReviews),
        [filter, changeFilter]
    );

    const handleChangeIsVerified = React.useCallback(
        () => changeFilter('filter.isVerified', !filter.isVerified),
        [filter, changeFilter]
    );

    return (
        <>
            <Checkbox disabled={false} checked={filter?.isPhotoOnly} onChange={handleChangeIsPhotoOnly}>
                Только с фото
            </Checkbox>
            <Checkbox disabled={false} checked={filter?.withReviews} onChange={handleChangeWithReviews}>
                Только с отзывами
            </Checkbox>
            <Checkbox disabled={false} checked={filter?.isVerified} onChange={handleChangeIsVerified}>
                Только проверенные
            </Checkbox>
        </>
    );
};

FilterDisplay.propTypes = {
    filter: PropTypes.object.isRequired,
    changeFilter: PropTypes.func.isRequired,
};

export default React.memo(FilterDisplay);
