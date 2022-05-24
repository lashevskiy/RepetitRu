import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { Button } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import {
    Icon28AddSquareOutline,
    Icon28CheckSquareOutline,
    Icon28FavoriteOutline,
    Icon28ShareOutline,
} from '@vkontakte/icons';
import HorizontalScrollGroup from '../HorizontalScrollGroup/HorizontalScrollGroup';
import {
    APP_LINK,
    FAVORITE_SNACK_TEXT,
    GROUP_ID,
    IMAGE_BANNER_VK,
    POST_HEADER,
    POST_TEXT_SHORT,
    SUBSCRIBE_SNACK_TEXT,
} from '../../constants';
import { ShowWallPostBox } from '../../bridge';
import './style.scss';

const b = bemCl('overview-horizontal-actions');

const OverviewHorizontalActions = ({ group, openSnackBar }) => {
    const handleClickSubscribe = React.useCallback(() => {
        bridge.send('VKWebAppJoinGroup', { group_id: GROUP_ID }).then(data => {
            openSnackBar(SUBSCRIBE_SNACK_TEXT);
        });
    }, [openSnackBar]);

    const handleClickShowWallPostBox = React.useCallback(() => {
        ShowWallPostBox(
            {
                message: `${POST_HEADER}\nПодробнее - ${APP_LINK}\n\n${POST_TEXT_SHORT}`,
                attachments: `${IMAGE_BANNER_VK},${APP_LINK}`,
            },
            () => {}
        );
    }, []);

    const handleClickFavorite = React.useCallback(() => {
        bridge.send('VKWebAppAddToFavorites').then(() => {
            openSnackBar(FAVORITE_SNACK_TEXT);
        });
    }, [openSnackBar]);

    return (
        <HorizontalScrollGroup>
            <Button mode="tertiary" stretched size="m" onClick={handleClickSubscribe}>
                <div className={b()}>
                    {group?.is_member === 1 ? <Icon28CheckSquareOutline /> : <Icon28AddSquareOutline />}
                    <div>{group?.is_member === 1 ? 'Вы участник' : 'Вступить'}</div>
                </div>
            </Button>
            <Button mode="tertiary" stretched size="m" onClick={handleClickShowWallPostBox}>
                <div className={b()}>
                    <Icon28ShareOutline />
                    <div>Поделиться</div>
                </div>
            </Button>
            <Button mode="tertiary" stretched size="m" onClick={handleClickFavorite}>
                <div className={b()}>
                    <Icon28FavoriteOutline />
                    <div>Избранное</div>
                </div>
            </Button>
        </HorizontalScrollGroup>
    );
};

OverviewHorizontalActions.propTypes = {
    openSnackBar: PropTypes.func.isRequired,
    group: PropTypes.object,
};

OverviewHorizontalActions.defaultProps = {
    group: null,
};

export default React.memo(OverviewHorizontalActions);
