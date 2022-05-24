import React from 'react';
import PropTypes from 'prop-types';
import { SimpleCell } from '@vkontakte/vkui';
import Dot from '../DotName/DotName';

const DistrictItem = ({ district, setDistrict, back }) => {
    const handleClick = React.useCallback(() => {
        setDistrict(district);
        back();
    }, [district, setDistrict, back]);

    return (
        <SimpleCell
            before={district.metroLine ? <Dot color={district?.metroLine?.color} /> : null}
            onClick={handleClick}
        >
            {district.name}
        </SimpleCell>
    );
};

DistrictItem.propTypes = {
    district: PropTypes.object.isRequired,
    setDistrict: PropTypes.func.isRequired,
    back: PropTypes.func.isRequired,
};

export default React.memo(DistrictItem);
