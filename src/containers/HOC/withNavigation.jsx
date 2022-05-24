import React from 'react';
import { createNavigation } from '../navigation/createNavigation';

export const withNavigation = WrappedComponent => {
    const Component = props => <WrappedComponent {...props} />;
    return createNavigation()(Component);
};
