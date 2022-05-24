import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from '@vkontakte/vkui';

const CityItem = ({ city, setCity, back }) => {
    const handleClick = React.useCallback(() => {
        setCity(city);
        back();
    }, [setCity, back, city]);


    return (
        <Cell onClick={handleClick} description={city.regionName ? `и ${city.regionName}` : null}>
            {city.cityName}
        </Cell>
    );
};

CityItem.propTypes = {
    city: PropTypes.object.isRequired,
    setCity: PropTypes.func.isRequired,
    back: PropTypes.func.isRequired,
};

export default React.memo(CityItem);
