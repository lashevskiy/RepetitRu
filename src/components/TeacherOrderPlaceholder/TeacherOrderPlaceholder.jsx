import React from 'react';
import { Icon56PhoneOutline } from '@vkontakte/icons';
import { Placeholder, Button } from '@vkontakte/vkui';
import { withNavigation } from '../../containers/HOC/withNavigation';

const TeacherOrderPlaceholder = ({ ...navigationParams }) => {
    const handleClick = React.useCallback(() => navigationParams.setActiveModal(null), [navigationParams]);

    return (
        <Placeholder
            icon={<Icon56PhoneOutline />}
            header="Обратный звонок заказан"
            action={
                <Button size="l" onClick={handleClick}>
                    Продолжить поиск
                </Button>
            }
        >
            Мы свяжемся с вами в течение 15 минут
        </Placeholder>
    );
};

export default withNavigation(TeacherOrderPlaceholder);
