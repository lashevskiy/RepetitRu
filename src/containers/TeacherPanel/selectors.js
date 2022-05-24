const getRoot = state => state.TeacherPanel;

export const getIsLoading = state => getRoot(state).isLoading;
export const getIsHasError = state => getRoot(state).isHasError;
export const getData = state => getRoot(state).data;

export const getTeacherId = state => getRoot(state).teacherId;
