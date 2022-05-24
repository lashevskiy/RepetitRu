import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { Div, Group, HorizontalScroll } from '@vkontakte/vkui';
import './style.scss';

const b = bemCl('horizontal-scroll-group');

const HorizontalScrollGroup = ({ children, separator }) => (
    <Group separator={separator}>
        <HorizontalScroll>
            <Div className={b().toString()}>{children}</Div>
        </HorizontalScroll>
    </Group>
);

HorizontalScrollGroup.propTypes = {
    children: PropTypes.node.isRequired,
    separator: PropTypes.string.isRequired,
};

HorizontalScrollGroup.defaultProps = {
    separator: 'auto',
};

export default React.memo(HorizontalScrollGroup);
