import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { Button } from '@vkontakte/vkui';
import { Icon24Fire } from '@vkontakte/icons';
import { withNavigation } from '../../containers/HOC/withNavigation';
import { GROUP_LINK_MESSAGE } from '../../constants';
import { isApp, isDesktop } from '../../utils';
import { MODALS_ID } from '../../constants/modals';
import HorizontalScrollGroup from '../HorizontalScrollGroup/HorizontalScrollGroup';
import './style.scss';

const b = bemCl('overview-button-actions');

const OverviewButtonActions = ({ group, ...navigationParams }) => {
    const handleClickCall = React.useCallback(() => {
        navigationParams.setActiveModal(MODALS_ID.ORDER, { teacher: '1' });
    }, [navigationParams]);

    return (
        <HorizontalScrollGroup separator="hide">
            {!isApp() ? (
                <Button
                    stretched
                    mode="outline"
                    size="l"
                    className={b('message').toString()}
                    href={GROUP_LINK_MESSAGE}
                    target="_blank"
                >
                    Сообщение
                </Button>
            ) : null}
            <Button
                before={<Icon24Fire />}
                stretched
                mode={'commerce'}
                className={b('find').toString()}
                size="l"
                onClick={handleClickCall}
            >
                {isDesktop() || isApp() ? 'Найти репетитора' : 'Найти'}
            </Button>
        </HorizontalScrollGroup>
    );
};

OverviewButtonActions.propTypes = {
    group: PropTypes.object,
};

OverviewButtonActions.defaultProps = {
    group: null,
};

export default withNavigation(OverviewButtonActions);
