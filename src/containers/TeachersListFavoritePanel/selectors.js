const getRoot = state => state.TeachersListFavoritePanel;

export const getIsLoading = state => getRoot(state).isLoading;
export const getIsHasError = state => getRoot(state).isHasError;
export const getData = state => getRoot(state).data;
export const getTeacherIds = state => getRoot(state).ids;

export const getTotal = state => getData(state).length;
export const getLimit = state => getRoot(state).limit;
export const getOffset = state => getRoot(state).offset;
export const getPage = state => getRoot(state).page;
export const getPages = state => {
    const total = getTotal(state);
    const limit = getLimit(state);

    //Check all falses values: null, undefined, false, 0, NaN
    return total && limit ? Math.ceil(total / limit) : 0;
};

export const isEmpty = state => {
    const data = getData(state);

    return data == null || data.length === 0;
};

export const isFavoriteTeacher = (state, id) => {
    const teachers = getData(state);
    return teachers.find(teacher => teacher.id === id) !== undefined;
};
