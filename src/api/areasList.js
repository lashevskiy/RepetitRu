import axios from 'axios';

export const getAreasList = async () => {
    const response = await axios.post('https://it-apps.ru/lol123.php', {
        url: 'https://api.repetit.ru/public/areas',
    });

    return await response.data;
};
