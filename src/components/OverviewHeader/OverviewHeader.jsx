import React from 'react';
import bemCl from 'bem-cl';
import { Avatar, Group, RichCell } from '@vkontakte/vkui';
import { Icon16Verified } from '@vkontakte/icons';
import { IMAGE_BANNER, IMAGE_ICON } from '../../constants';
import { isApp } from '../../utils';
import './style.scss';

const b = bemCl('overview-header');

const OverviewHeader = () => (
    <>
        <div className={b('container')}>
            <div className={b('image-wrapper')}>
                <img src={IMAGE_BANNER} alt="Репетиторы" />
            </div>
        </div>

        <Group separator="hide">
            <RichCell
                disabled
                multiline
                before={<Avatar size={80} src={IMAGE_ICON} />}
                caption={isApp() ? 'Лучшие репетиторы во всех городах России' : 'Открытая группа'}
            >
                <div className={b('title')}>
                    {isApp() ? 'Репетиторы России' : 'REPETIT.RU - Ассоциация репетиторов'}
                    <Icon16Verified fill="var(--accent)" className={b('icon')} />
                </div>
            </RichCell>
        </Group>
    </>
);

export default OverviewHeader;
