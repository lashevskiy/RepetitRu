import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@vkontakte/vkui';
import CityItem from '../../components/CityItem/CityItem';

const CityList = ({ cityList, setCity, back }) => (
    <List>
        {cityList.map(city => (
            <CityItem key={city.id} city={city} setCity={setCity} back={back} />
        ))}
    </List>
);

CityList.propTypes = {
    cityList: PropTypes.array.isRequired,
    setCity: PropTypes.func.isRequired,
    back: PropTypes.func.isRequired,
};

export default React.memo(CityList);
