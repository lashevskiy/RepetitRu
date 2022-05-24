import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@vkontakte/vkui';
import DistrictItem from '../../components/DistrictItem/DistrictItem';

const DistrictsList = ({ districts, setDistrict, back }) => (
    <List>
        {districts.map(district => (
            <DistrictItem key={district.id} district={district} setDistrict={setDistrict} back={back} />
        ))}
    </List>
);

DistrictsList.propTypes = {
    districts: PropTypes.array.isRequired,
    setDistrict: PropTypes.func.isRequired,
    back: PropTypes.func.isRequired,
};

export default React.memo(DistrictsList);
