const getRoot = state => state.SubjectsListPanel;

export const getIsLoading = state => getRoot(state).isLoading;
export const getIsHasError = state => getRoot(state).isHasError;
export const getData = state => getRoot(state).data;
