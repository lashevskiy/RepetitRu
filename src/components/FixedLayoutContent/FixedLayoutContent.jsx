import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import './style.scss';

const b = bemCl('fixed-layout-content');

const FixedLayoutContent = ({ children }) => {
    return <div className={b()}>{children}</div>;
};

FixedLayoutContent.propTypes = {
    children: PropTypes.node.isRequired,
};

export default React.memo(FixedLayoutContent);
