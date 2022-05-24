const getRoot = state => state.FilterPanel;

export const getIsLoading = state => getRoot(state).isLoading;
export const getIsHasError = state => getRoot(state).isHasError;

export const getFilter = state => getRoot(state).filter;
export const getFilterTmp = state => getRoot(state).filterTmp;
