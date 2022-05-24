import React from 'react';
import { Placeholder, Button } from '@vkontakte/vkui';
import { Icon56FavoriteOutline } from '@vkontakte/icons';
import { withNavigation } from '../../containers/HOC/withNavigation';
import { VIEWS_ID } from '../../constants/views';

const TeachersListFavoritePlaceholder = ({ ...navigationParams }) => {
    const handleClick = React.useCallback(
        () => navigationParams.setActiveStory(VIEWS_ID.REPETITORS),
        [navigationParams]
    );

    return (
        <Placeholder
            stretched
            icon={<Icon56FavoriteOutline />}
            header="Добавьте репетиторов в избранное"
            action={
                <Button size="l" onClick={handleClick}>
                    Найти репетитора
                </Button>
            }
        >
            Вы сможете вернуться к ним позже, чтобы начать занятия
        </Placeholder>
    );
};

export default withNavigation(TeachersListFavoritePlaceholder);
