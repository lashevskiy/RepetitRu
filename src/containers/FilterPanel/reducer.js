import { makeReducer } from '../../utils/redux';
import * as actions from './actions';

const initialFilterState = {
    city: null,
    district: null,
    lesson: null,
    lessonPlace: '0',
    sex: {
        male: false,
        female: false,
    },
    teacherStatusIds: [],
    isPhotoOnly: false,
    isVerified: false,
    withReviews: false,
    experience1: null,
    experience5: null,
    experience10: null,
    experience100: null,
    age30: null,
    age50: null,
    age100: null,
    teacherStatusIds1: null,
    teacherStatusIds2: null,
    teacherStatusIds3: null,
    teacherStatusIds4: null,
    teacherStatusIds5: null,
    teacherStatusIds7: null,
    minPricePerHour: 0,
    maxPricePerHour: 5000,
};

const initialState = {
    filter: {
        ...initialFilterState,
    },
    filterTmp: {
        ...initialFilterState,
    },
};

const reducer = makeReducer(initialState, {
    [actions.TYPES.RESET_FILTER_TMP]: (state, action) => ({
        ...state,
        filterTmp: {
            ...initialState,
        },
    }),

    [actions.TYPES.RESET_FILTER]: (state, action) => ({
        ...state,
        ...initialState,
    }),

    [actions.TYPES.CHANGE_FILTER_AGE]: (state, action) => {
        const { paramPath, value } = action;

        const { age30, age50, age100 } = state.filter;
        let currentAges = {
            age30: age30,
            age50: age50,
            age100: age100,
        };

        currentAges[paramPath] = value;

        let ages = [currentAges.age30, currentAges.age50, currentAges.age100];

        if (ages[0] === true && ages[2] === true) {
            ages[1] = true;
        }

        if (value === false && ages[0] === true && age50 === true && ages[2] === true) {
            ages[0] = false;
            ages[1] = true;
            ages[2] = false;
        }

        return {
            ...state,
            filter: {
                ...state.filter,
                age30: ages[0],
                age50: ages[1],
                age100: ages[2],
            },
        };
    },

    [actions.TYPES.CHANGE_FILTER_EXPERIENCE]: (state, action) => {
        const { paramPath, value } = action;

        const { experience1, experience5, experience10, experience100 } = state.filter;
        let currentExperience = {
            experience1: experience1,
            experience5: experience5,
            experience10: experience10,
            experience100: experience100,
        };

        currentExperience[paramPath] = value;

        let experience = Object.values(currentExperience);

        const min = experience.findIndex(item => item === true);
        const max = experience.lastIndexOf(true);

        const changedItemIndex = Object.keys(currentExperience).findIndex(item => item === paramPath);

        let newExp = [];

        if (changedItemIndex > min && changedItemIndex < max) {
            newExp = experience.fill(false, min, max + 1);
            newExp[changedItemIndex] = true;
        } else {
            newExp = experience.fill(true, min, max);
        }

        return {
            ...state,
            filter: {
                ...state.filter,
                experience1: newExp[0],
                experience5: newExp[1],
                experience10: newExp[2],
                experience100: newExp[3],
            },
        };
    },

    [actions.TYPES.CHANGE_FILTER]: (state, action) => {
        const { paramPath, value } = action;

        const path = paramPath.split('.');
        const filterType = path[0]; //filter
        const filterParam = path[1]; //sex
        const filterValue = path[2]; //male or undefined

        if (!filterValue) {
            return {
                ...state,
                [filterType]: {
                    ...state[filterType],
                    [filterParam]: value,
                },
            };
        }

        return {
            ...state,
            [filterType]: {
                ...state[filterType],
                [filterParam]: {
                    ...state[filterType][filterParam],
                    [filterValue]: value,
                },
            },
        };
    },

    [actions.TYPES.SET_CITY]: (state, action) => {
        const { id } = action;
        return {
            ...state,
            filter: {
                ...state.filter,
                city: id,
            },
        };
    },
    [actions.TYPES.SET_DISTRICT]: (state, action) => {
        const { id } = action;
        return {
            ...state,
            filter: {
                ...state.filter,
                district: id,
            },
        };
    },
    [actions.TYPES.SET_LESSON]: (state, action) => {
        const { id } = action;
        return {
            ...state,
            filter: {
                ...state.filter,
                lesson: id,
            },
        };
    },
});

export default reducer;
