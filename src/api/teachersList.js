import axios from 'axios';

export const getTeachersIds = async ({ teacherStatusIds, ...params }) => {
    const response = await axios.post('https://it-apps.ru/lol123.php', {
        url: `https://api.repetit.ru/public/search/teacherIds?${new URLSearchParams(
            params
        ).toString()}&${teacherStatusIds}`,
    });

    return await response.data;
};

export const getTeachersList = async (ids, type = 'short') => {
    const res = ids.reduce((acc, item, index) => {
        return (acc += `Ids[${index}]=${item}&`);
    }, '');

    const response = await axios.post('https://it-apps.ru/lol123.php', {
        url: `https://api.repetit.ru/public/teachers/${type}?${res}`,
    });

    return await response.data;
};

export const getTeacherById = async id => {
    const response = await axios.post('https://it-apps.ru/lol123.php', {
        url: `https://api.repetit.ru/public/teachers/full?TeacherId=${id}`,
    });

    if (response.status === 200) {
        return await response.data;
    }

    return 'error';
};
