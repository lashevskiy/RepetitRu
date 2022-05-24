import React from 'react';
import PropTypes from 'prop-types';
import { Group, Link, MiniInfoCell } from '@vkontakte/vkui';
import { Icon20ArticleOutline, Icon20FollowersOutline, Icon20GlobeOutline } from '@vkontakte/icons';
import * as Numfix from '../../utils/numfix';
import { SITE_LINK, SITE_LINK_TITLE } from '../../constants';
import { isApp } from '../../utils';

const OverviewDescription = ({ group }) => (
    <Group>
        <MiniInfoCell before={<Icon20ArticleOutline />} textWrap="full">
            {isApp()
                ? 'Сервис по подбору репетиторов по всей России. Более 100 000 репетиторов по всем предметам и иностранным языкам'
                : 'Сервис по подбору репетиторов REPETIT.RU. Более 100 000 репетиторов по всем предметам и иностранным языкам'}
        </MiniInfoCell>
        {group?.members_count ? (
            <MiniInfoCell before={<Icon20FollowersOutline />}>
                {Numfix.numfix(group?.members_count, Numfix.FOLLOWERS)}
            </MiniInfoCell>
        ) : null}
        {!isApp() ? (
            <MiniInfoCell before={<Icon20GlobeOutline />}>
                <Link href={SITE_LINK} target="_blank">
                    {SITE_LINK_TITLE}
                </Link>
            </MiniInfoCell>
        ) : null}
    </Group>
);

OverviewDescription.propTypes = {
    group: PropTypes.object,
};

OverviewDescription.defaultProps = {
    group: null,
};

export default React.memo(OverviewDescription);
