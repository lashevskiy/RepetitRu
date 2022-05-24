import { PANELS_ID } from './panels';
import { isApp } from '../utils';

export const VIEWS_ID = {
    OVERVIEW: 'overview',
    REPETITORS: 'REPETITORS',
    CLIPS: 'clips',
    FILTERS: 'filters',
    CITIES: 'cities',
    REPETITOR: 'repetitor',
    FAVORITE: 'favorite',
    ORDER: 'order',
};

export const VIEWS = {
    [VIEWS_ID.ORDER]: {
        id: VIEWS_ID.ORDER,
        header: 'Подбор',
        text: 'Подбор',
        startPanel: PANELS_ID.OrderPanel,
    },
    [VIEWS_ID.OVERVIEW]: {
        id: VIEWS_ID.OVERVIEW,
        header: isApp() ? 'Главная' : 'REPETIT.RU',
        text: isApp() ? 'Главная' : 'Repetit.ru',
        startPanel: PANELS_ID.OVERVIEW,
    },
    [VIEWS_ID.REPETITOR]: {
        id: VIEWS_ID.REPETITOR,
        header: 'Репетиторы',
        startPanel: PANELS_ID.TeachersListPanel,
    },
    [VIEWS_ID.FILTERS]: {
        id: VIEWS_ID.FILTERS,
        header: 'Фильтры',
        startPanel: PANELS_ID.HOME,
    },
    [VIEWS_ID.CITIES]: {
        id: VIEWS_ID.CITIES,
        header: 'Города',
        startPanel: PANELS_ID.HOME,
    },
    [VIEWS_ID.REPETITOR]: {
        id: VIEWS_ID.REPETITOR,
        header: 'Карточка репетитора',
        startPanel: PANELS_ID.HOME,
    },
    [VIEWS_ID.CLIPS]: {
        id: VIEWS_ID.CLIPS,
        header: 'Клипы222',
        startPanel: PANELS_ID.CLIPS,
    },
    [VIEWS_ID.REPETITORS]: {
        id: VIEWS_ID.REPETITORS,
        header: 'Репетитрры',
        text: 'Репетиторы',
        startPanel: PANELS_ID.TeachersListPanel,
    },
    [VIEWS_ID.FAVORITE]: {
        id: VIEWS_ID.FAVORITE,
        header: 'Избранное',
        text: 'Избранное',
        startPanel: PANELS_ID.FavoritePanel,
    },
};
