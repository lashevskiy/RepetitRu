import React from 'react';
import PropTypes from 'prop-types';

const StateRender = ({ isLoading, isHasError, loadingComponent, doneComponent, errorComponent }) => {
    if (isLoading) {
        return loadingComponent;
    }

    if (isHasError) {
        return errorComponent;
    }

    return doneComponent;
};

StateRender.propTypes = {
    isLoading: PropTypes.bool,
    isHasError: PropTypes.bool,
    loadingComponent: PropTypes.node,
    doneComponent: PropTypes.node,
    errorComponent: PropTypes.node,
};

export default React.memo(StateRender);
