import { isApp } from '../utils';

export const PANELS_ID = {
    HOME: 'home',
    SERVICES: 'services',
    OVERVIEW: 'overview',
    ORDER: 'order',
    CITIES: 'cities',
    REPETITOR: 'repetitor',
    MESSAGES: 'messages',
    CLIPS: 'clips',
    TeachersListPanel: 'TeachersListPanel',
    TeacherPanel: 'TeacherPanel',
    CityListPanel: 'CityListPanel',
    SubjectsListPanel: 'SubjectsListPanel',
    DistrictsListPanel: 'DistrictsListPanel',
    FavoritePanel: 'FavoritePanel',
    FilterPanel: 'FilterPanel',
    OrderPanel: 'OrderPanel',
};

export const PANELS = {
    [PANELS_ID.OrderPanel]: {
        id: PANELS_ID.OrderPanel,
        header: 'Подбор репетитора',
    },
    [PANELS_ID.HOME]: {
        id: PANELS_ID.HOME,
        header: 'Главная',
    },
    [PANELS_ID.SERVICES]: {
        id: PANELS_ID.SERVICES,
        header: 'Сервисы123',
    },
    [PANELS_ID.OVERVIEW]: {
        id: PANELS_ID.OVERVIEW,
        header: isApp() ? 'Главная' : 'Repetit.ru',
    },
    [PANELS_ID.ORDER]: {
        id: PANELS_ID.ORDER,
        header: 'Заказ',
    },
    [PANELS_ID.CITIES]: {
        id: PANELS_ID.CITIES,
        header: 'Города',
    },
    [PANELS_ID.REPETITOR]: {
        id: PANELS_ID.REPETITOR,
        header: 'Карточка репетитора',
    },
    [PANELS_ID.MESSAGES]: {
        id: PANELS_ID.MESSAGES,
        header: 'Сообщения',
    },
    [PANELS_ID.CLIPS]: {
        id: PANELS_ID.CLIPS,
        header: 'Клипы',
    },
    [PANELS_ID.TeachersListPanel]: {
        id: PANELS_ID.TeachersListPanel,
        header: 'Репетиторы',
    },
    [PANELS_ID.TeacherPanel]: {
        id: PANELS_ID.TeacherPanel,
        header: 'Репетитор',
    },
    [PANELS_ID.CityListPanel]: {
        id: PANELS_ID.CityListPanel,
        header: 'Выбор города',
    },
    [PANELS_ID.SubjectsListPanel]: {
        id: PANELS_ID.SubjectsListPanel,
        header: 'Выбор предмета',
    },
    [PANELS_ID.DistrictsListPanel]: {
        id: PANELS_ID.DistrictsListPanel,
        header: 'Выбор района',
    },
    [PANELS_ID.FavoritePanel]: {
        id: PANELS_ID.FavoritePanel,
        header: 'Избранное',
    },
    [PANELS_ID.FilterPanel]: {
        id: PANELS_ID.FilterPanel,
        header: 'Фильтры',
    },
};
