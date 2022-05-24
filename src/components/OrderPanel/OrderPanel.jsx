import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import { getPanelHeader } from '../../utils/panels';
import OrderBanner from '../OrderBanner/OrderBanner';

const OrderPanel = ({ id, user }) => (
    <Panel id={id}>
        <PanelHeader>{getPanelHeader(id)}</PanelHeader>

        <OrderBanner user={user} isPanel />
    </Panel>
);

OrderPanel.propTypes = {
    id: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
};

export default React.memo(OrderPanel);
