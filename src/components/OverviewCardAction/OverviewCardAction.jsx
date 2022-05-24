import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { Card, Link } from '@vkontakte/vkui';
import './style.scss';

const b = bemCl('overview-card-action');

const OverviewCardAction = ({ size, onClick, icon, title }) => (
    <Card size={size} onClick={onClick} mode="tint">
        <div className={b()}>
            <Link className={b('icon').toString()}>{icon}</Link>
            <div className={b('link')}>
                <Link>{title}</Link>
            </div>
        </div>
    </Card>
);

OverviewCardAction.propTypes = {
    size: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default React.memo(OverviewCardAction);
