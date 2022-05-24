export const makeActionCreator = (type, ...argNames) => (...args) => {
    const action = { type };

    argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index];
    });

    return action;
};

export const makeReducer = (defaultState, obj) => (state = defaultState, action) => {
    if (!Object.prototype.hasOwnProperty.call(obj, action.type)) {
        return state;
    }

    return obj[action.type](state, action);
};
