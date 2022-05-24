export const getFilteredList = (data, search) => {
    const searchValue = search.toLowerCase().trim();

    return data.filter(({ name }) => name.toLowerCase().indexOf(searchValue) > -1);
};
