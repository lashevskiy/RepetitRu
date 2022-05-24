import { createSelector } from 'reselect';

const getRoot = state => state.TeachersListPanel;

export const getIsLoading = state => getRoot(state).isLoading;
export const getIsHasError = state => getRoot(state).isHasError;
export const getData = state => getRoot(state).data;
export const getTeacherIds = state => getRoot(state).ids;

export const getIsLoadingFull = state => getRoot(state).isLoadingFull;
export const getIsHasErrorFull = state => getRoot(state).isHasErrorFull;
export const getDataFull = state => getRoot(state).dataFull;

export const getFullTeacherById = createSelector(
    getDataFull,
    getIsLoadingFull,
    getIsHasErrorFull,
    (state, teacherId) => teacherId,
    (dataFull, isLoadingFull, isHasErrorFull, teacherId) => {
        return isLoadingFull === true || isHasErrorFull === true ? null : dataFull.find(el => el.id === teacherId);
    }
);

export const getTotal = state => getData(state).length;
export const getLimit = state => getRoot(state).limit;
export const getOffset = state => getRoot(state).offset;
export const getPage = state => getRoot(state).page;
export const getPages = state => getRoot(state).pages;

export const isEmpty = state => {
    const data = getData(state);

    return data == null || data.length === 0;
};
