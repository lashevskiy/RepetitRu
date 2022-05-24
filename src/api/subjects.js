import axios from 'axios';

export const searchSubjects = async (pattern = '') => {
    const response = await axios.post('https://it-apps.ru/lol123.php', {
        url: `https://api.repetit.ru/public/searchSubjects?Pattern=${encodeURIComponent(pattern)}`,
    });

    return await response.data;
};
