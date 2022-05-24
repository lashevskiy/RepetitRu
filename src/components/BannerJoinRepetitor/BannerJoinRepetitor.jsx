import React from 'react';
import { Avatar, Group, Button, Banner } from '@vkontakte/vkui';
import { IMAGE_ICON_APP, REGISTRATION_LINK } from '../../constants/index';

const BannerJoinRepetitor = () => {
    const handleClickRegistration = React.useCallback(() => {
        window.open(REGISTRATION_LINK, '_blank');
    }, []);

    return (
        <Group>
            <Banner
                onClick={handleClickRegistration}
                before={<Avatar size={80} mode="image" src={IMAGE_ICON_APP} />}
                header="Стать репетитором"
                subheader="Получите новых клиентов"
                asideMode="expand"
                actions={<Button mode="commerce">Подробнее</Button>}
            />
        </Group>
    );
};

export default BannerJoinRepetitor;
