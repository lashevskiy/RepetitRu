import React from 'react';
import { Placeholder, Button } from '@vkontakte/vkui';
import { Icon56InfoOutline } from '@vkontakte/icons';
import { withNavigation } from '../../containers/HOC/withNavigation';
import { PANELS_ID } from '../../constants/panels';

const TeachersListPlaceholder = ({ ...navigationParams }) => {
    const handleClick = React.useCallback(() => navigationParams.goToPage(PANELS_ID.FilterPanel), [navigationParams]);

    return (
        <Placeholder
            stretched
            icon={<Icon56InfoOutline />}
            header="Ничего не найдено"
            action={
                <Button size="l" onClick={handleClick}>
                    Изменить фильтры
                </Button>
            }
        >
            По вашему запросу ничего не найдено. Попробуйте изменить критерии поиска
        </Placeholder>
    );
};

export default withNavigation(TeachersListPlaceholder);
