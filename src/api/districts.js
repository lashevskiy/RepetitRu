import axios from 'axios';

export const getDistricts = async areaId => {
    const response = await axios.post('https://it-apps.ru/lol123.php', {
        url: `https://api.repetit.ru/public/districts?AreaId=${areaId}`,
    });

    return await response.data;
};
